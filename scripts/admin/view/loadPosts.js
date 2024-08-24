import { deletePost } from "/scripts/admin/controller/deletePost.js";
import PostConnection from "/scripts/admin/api/PostConnection.js";

const CATEGORIES = ["Categoria", "Postagem", "Transparencia", "Ação"];

document.addEventListener("DOMContentLoaded", function () {
    renderPosts();
});

function getTitleElement(POST) {
    const title = POST.titulo_postagem;

    const titleElement = document.createElement("h3");

    titleElement.classList = "postagem-dados__header--titulo";
    titleElement.innerHTML = title;

    return titleElement;
}

function getCategoryElement(POST) {
    const category = CATEGORIES[POST.categoria_postagem];
    const categoryElement = document.createElement("h3");

    categoryElement.classList = "postagem-dados__header--categoria";
    categoryElement.innerHTML = `Categoria: ${category}`;

    return categoryElement;
}

function getExternalLinkElement() {
    const externalLink = "https://google.com";
    const externalLinkElement = document.createElement("a");

    externalLinkElement.classList = "postagem-dados__body--link";
    externalLinkElement.setAttribute("href", externalLink);
    externalLinkElement.innerHTML = "Leia Mais";

    return externalLinkElement;
}

function getCaptionElement(POST) {
    const caption = POST.legenda_postagem;

    const captionElement = document.createElement("p");
    captionElement.classList = "postagem-dados__body--legenda";
    captionElement.innerHTML = caption;
    return captionElement;
}

function createButtonsElement(postId) {
    const buttons_row = document.createElement("div");
    buttons_row.classList = "row postagem-menu";

    // Botão Editar
    const botaoEditar = document.createElement("a");
    botaoEditar.setAttribute("href", `/pages/admin/edit.html?id=${postId}`);
    botaoEditar.classList = "btn btn-primary postagem-menu__botao";
    botaoEditar.innerHTML = "Editar";
    botaoEditar.id = postId;
    buttons_row.appendChild(botaoEditar);

    // Botão Remover
    const botaoRemover = document.createElement("button");
    botaoRemover.name = "Remover";
    botaoRemover.id = postId;
    botaoRemover.classList = "btn btn-danger postagem-menu__botao";
    botaoRemover.innerHTML = "Remover";
    botaoRemover.setAttribute("type", "submit");
    botaoRemover.addEventListener("click", () => {
        const query = [botaoRemover.id];
        deletePost(query);
    });
    buttons_row.appendChild(botaoRemover);

    return buttons_row;
}

function createPostsElement(POST) {
    const postRow = document.createElement("div");
    const postData = document.createElement("div");
    const postHeader = document.createElement("div");
    const postBody = document.createElement("div");

    postRow.classList = "row postagem";
    postData.classList = "postagem-dados";

    postHeader.classList = "postagem-dados__header";
    postBody.classList = "postagem-dados__body";

    const postTitle = getTitleElement(POST);
    postHeader.appendChild(postTitle);

    const postCategory = getCategoryElement(POST);
    postHeader.appendChild(postCategory);

    const postCaption = getCaptionElement(POST);
    postBody.appendChild(postCaption);

    const postLink = getExternalLinkElement();
    postBody.appendChild(postLink);

    const postButton = createButtonsElement(POST.id_postagem);

    postData.appendChild(postHeader);
    postData.appendChild(postBody);
    postRow.appendChild(postData);
    postRow.appendChild(postButton);

    return postRow;
}

async function renderPosts() {
    const allpost = await PostConnection.getAllPosts();
    const postsContainer = document.getElementById("secao-postagens");

    allpost.forEach(POST => {
        const post = createPostsElement(POST);
        postsContainer.appendChild(post);
    });
}
