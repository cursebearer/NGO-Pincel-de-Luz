import { createContact } from "/scripts/home/api/dbController.js";
const button = document.getElementById("enviarEmail");

button.addEventListener("click", () => {
    const nome_contato = document.getElementById("nome").value;
    const email_contato = document.getElementById("email").value;

    createContact(nome_contato, email_contato);
    alert("Mensagem enviada com sucesso, agradecemos o contato!");
    window.location.reload();
});