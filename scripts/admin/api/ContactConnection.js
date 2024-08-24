const ContactConnection = {
    getAllContacts: async () => {
        let contatos = [];
        const resp = await fetch('https://pincel-de-luz.onrender.com/contato/loadAll')
            .then(response => { return response.json() })
            .then(data => contatos = data)
            .catch(error => console.log(error));
        return contatos;
    },
    loadSpecificMensagem: async (id_contato) => {
        let messages = [];
        const options = {
            id_contato: id_contato
        }
        const resp = await fetch("https://pincel-de-luz.onrender.com/mensagem/loadSpecific", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(options)
        }).then(response => response.json())
            .then(data => messages = data)
            .catch(error => alert('Tente novamente mais tarde!', error));
        return messages;
    }
}

export default ContactConnection;