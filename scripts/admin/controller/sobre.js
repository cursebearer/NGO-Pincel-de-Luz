import TextConnection from "/scripts/admin/api/TextConnection.js";

const SobreController = {
    loadText: async () => {
        const texto = await TextConnection.getText()
        return texto;
    },
    updateText: (text) => {
        TextConnection.updateText(text);
    }
}

export default SobreController;