import { getContacts, getMessages } from "/scripts/admin/controller/contact.js";
const LISTA_CONTATOS = document.getElementById("lista-contatos");
const LISTA_MENSAGENS = document.getElementById("lista-mensagens");
const CONTATOS = await getContacts();

document.body.addEventListener("onload", renderElements(CONTATOS));

function createListItemElement() {
    const LIST_ITEM = document.createElement("li");
    return LIST_ITEM;
}
function createButtonElement(contato) {
    const BUTTON = document.createElement("button");
    BUTTON.classList = "contatos-btn";
    BUTTON.innerHTML = `${contato.nome_contato}: ${contato.email_contato}`;
    BUTTON.id = contato.id_contato;
    BUTTON.addEventListener("click", async () => {
        LISTA_MENSAGENS.innerHTML = "";
        const msgs = await getMessages(BUTTON.id);
        renderMessages(msgs);
    })
    return BUTTON;
}
function renderElements(contatos) {

    contatos.forEach(contato => {
        const LIST_ITEM = createListItemElement();
        const BUTTON = createButtonElement(contato);

        LIST_ITEM.appendChild(BUTTON);
        LISTA_CONTATOS.appendChild(LIST_ITEM);
    });
}

//MENSAGENS
function createContainerMessage() {
    const CONTAINER = document.createElement("div");
    CONTAINER.classList = "mensagem-container";

    return CONTAINER;
}
// function createTitleElement(n) {
//     const TITLE_ELEMENT = document.createElement("h2");
//     TITLE_ELEMENT.classList = "mensagem-titulo";
//     TITLE_ELEMENT.innerHTML = `Mensagem ${n}`;

//     return TITLE_ELEMENT;
// }
function createContentElement() {
    const CONTENT_CONTAINER = document.createElement("div");
    CONTENT_CONTAINER.classList = "content";

    return CONTENT_CONTAINER;
}
function createInnerTitleElement(title) {
    const TITLE = document.createElement("h3");
    TITLE.classList = "";
    TITLE.innerHTML = title;

    return TITLE;
}
function createInnerContentElement(content) {
    const CONTENT = document.createElement("p");
    CONTENT.innerHTML = content;

    return CONTENT;
}
function renderMessages(mensagens) {

    let numberOf = 1;
    mensagens.forEach(msg => {
        const CONTAINER = createContainerMessage();
        // const TITLE = createTitleElement(numberOf);
        //CONTAINER.appendChild(TITLE);

        const ASSUNTO_CONTAINER = createContentElement();
        const ASSUNTO_TITLE = createInnerTitleElement("Assunto: ");
        const assunto = msg.assunto;
        const ASSUNTO_CONTENT = createInnerContentElement(assunto);
        ASSUNTO_CONTAINER.appendChild(ASSUNTO_TITLE);
        ASSUNTO_CONTAINER.appendChild(ASSUNTO_CONTENT);
        CONTAINER.appendChild(ASSUNTO_CONTAINER);


        const MENSAGEM_CONTAINER = createContentElement();
        const MENSAGEM_TITLE = createInnerTitleElement("Mensagem: ");
        const mensagem = msg.mensagem;
        const MENSAGEM_CONTENT = createInnerContentElement(mensagem);
        MENSAGEM_CONTAINER.appendChild(MENSAGEM_TITLE);
        MENSAGEM_CONTAINER.appendChild(MENSAGEM_CONTENT);
        CONTAINER.appendChild(MENSAGEM_CONTAINER);

        LISTA_MENSAGENS.appendChild(CONTAINER);
        numberOf++;
    });
}