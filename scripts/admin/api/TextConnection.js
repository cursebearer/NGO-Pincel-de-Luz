
const TextConnection = {
    getText: async () => {
        let texto = [];
        try {
            const resp = await fetch('https://pincel-de-luz.onrender.com/sobre/text')
                .then(response => { return response.json() })
                .then(data => texto = data)
                .catch(error => console.log(error));
            return texto;
        } catch (error) {
            alert('Houve um errro');
        }
    },
    updateText: async (text) => {
        const options = {
            texto: text
        }
        const resp = await fetch('https://pincel-de-luz.onrender.com/sobre/update', {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(options)
        })
            .then(response => { return response.json() })
            .then(data => {
                texto = data;
            })
    }
}

export default TextConnection;