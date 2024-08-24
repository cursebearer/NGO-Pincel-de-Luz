import dbConnection from "/scripts/home/api/dbConnection.js";

export async function getPost() {
    const res = await dbConnection.getAllPosts();
    return res;
}
export async function createContact(nome_contato, email_contato) {
    const res = await dbConnection.createContact(nome_contato, email_contato);
}
export async function createMensagem(nome, email, assunto, mensagem) {
    const res = await dbConnection.createMensagem(nome, email, assunto, mensagem);
}