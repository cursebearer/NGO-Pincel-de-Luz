import ContactConnection from "/scripts/admin/api/ContactConnection.js";

export async function getContacts() {
    const resp = await ContactConnection.getAllContacts();
    return resp;
}
export async function getMessages(id) {
    const resp = await ContactConnection.loadSpecificMensagem(id);
    return resp.rows;
}

