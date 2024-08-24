import { createMensagem } from "/scripts/home/api/dbController.js";
const button = document.getElementById("enviarEmail");

button.addEventListener("click", () => {
    const nome_contato = document.getElementById("nome").value;
    const email_contato = document.getElementById("email").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;

    const res = createMensagem(nome_contato, email_contato, assunto, mensagem);
    alert("Mensagem enviada com sucesso, agradecemos o contato!");
});