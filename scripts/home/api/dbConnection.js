const dbConnection = {
    getAllPosts: async () => {
        let posts = [];
        const resp = await fetch('https://pincel-de-luz.onrender.com/api/posts')
            .then(response => { return response.json() })
            .then(data => posts = data)
            .catch(error => console.log(error));
        return posts;
    },
    createContact: async (nome, email) => {
        const options = {
            nome_contato: nome,
            email_contato: email
        };
        const resp = await fetch("https://pincel-de-luz.onrender.com/contato/create", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(options)
        }).then(response => response.json())
            .then(json => console.log(json))
            .catch(error => alert('Tente novamente mais tarde!', error));
        return resp;
    },
    loadSpecificContact: async (email) => {
        const reqContato = {
            email_contato: email
        };
        const contatoId = await fetch("https://pincel-de-luz.onrender.com/contato/loadSpecific", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(reqContato)
        }).then(response => response.json())
            // .then(json => console.log(json))
            .catch(error => alert('Tente novamente mais tarde!', error));
        return contatoId;
    },
    createMensagem: async (nome, email, assunto, mensagem) => {
        const contatoId = await dbConnection.loadSpecificContact(email);
        let id = contatoId[0] == undefined ? 0 : contatoId[0].id_contato;
        if (contatoId[0] == undefined) {
            await dbConnection.createContact(nome, email, assunto, mensagem);
            const newContatoId = await dbConnection.loadSpecificContact(email);
            id = newContatoId[0].id_contato;
        }
        const options = {
            id_contato: id,
            assunto: assunto,
            mensagem: mensagem
        }
        const resp = await fetch("https://pincel-de-luz.onrender.com/mensagem/create", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(options)
        }).then(response => response.json())
            .then(json => console.log(json))
            .catch(error => alert('Tente novamente mais tarde!', error));
        return resp;
    }
}

export default dbConnection;