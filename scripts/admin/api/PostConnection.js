const PostConnection = {
    createPost: async (titulo, legenda, categoria) => {
        const options = {
            titulo_postagem: titulo,
            legenda_postagem: legenda,
            categoria_postagem: categoria
        };
        await fetch("https://pincel-de-luz.onrender.com/api/posts/create", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(options)
        }).then(response => response.json())
            .then(json => console.log(json))
            .catch(error => alert('Não foi possível criar a postagens.', error));
    },
    getAllPosts: async () => {
        let posts = [];
        const resp = await fetch('https://pincel-de-luz.onrender.com/api/posts')
            .then(response => { return response.json() })
            .then(data => posts = data)
            .catch(error => console.log(error));
        return posts;
    },
    getSpecific: async (id) => {
        let post = [];
        const options = {
            id: id
        };
        const resp = await fetch('https://pincel-de-luz.onrender.com/api/posts/specific', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(options)
        }).then(response => { return response.json() })
            .then(data => post = data)
            .catch(error => console.log(error));
        return post;
    },
    deletePost: async (id_postagem) => {
        const config = {
            id: id_postagem
        }
        try {
            const response = await fetch("https://pincel-de-luz.onrender.com/api/posts/delete", {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(config)
            }).then(response => response.json())
                .then(json => console.log(json))
        } catch (e) {
            throw e;
        }
    },
    updatePost: async (id_postagem, titulo, legenda, categoria) => {
        const config = {
            id_postagem: id_postagem,
            titulo_postagem: titulo,
            legenda_postagem: legenda,
            categoria_postagem: categoria
        };
        try {
            await fetch("https://pincel-de-luz.onrender.com/api/posts/update", {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(config)
            }).then(response => response.json())
                .then(json => console.log(json))
                .catch(error => console.log('Não foi possível editar a postagem.', error));
        } catch (e) {
            throw e;
        }
    }
}

export default PostConnection;