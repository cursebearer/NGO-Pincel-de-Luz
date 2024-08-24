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
    }
}

export default TextConnection;