import { getPost } from "/scripts/home/api/dbController.js";

const CATEGORIES = ["Categoria", "Postagem", "Transparência", "Ação"];
function getPosts(){
    const posts = getPost();
    return posts;
} 
const postArea = document.getElementById("post-area");
function createImageContainerElement(post) {
    const container = document.createElement("div");
    container.classList = "image col-md-6";

    return container;
}
function createExternalLinkElement(post) {
    const externalLink = document.createElement("a");
    externalLink.innerHTML = "Veja Mais";
    externalLink.classList = "post-link";
    externalLink.setAttribute("href", "#");

    return externalLink;
}
function createTextAreaElement(post) {
    const textArea = document.createElement("p");
    textArea.classList = "post-text";
    textArea.innerHTML = post.legenda_postagem;

    return textArea;
}
function createContentCategoryElement(post) {
    const category = document.createElement("h3");
    category.classList = "post-category " + CATEGORIES[post.categoria_postagem];
    category.innerHTML = CATEGORIES[post.categoria_postagem];

    return category;
}
function createContentTitleElement(post) {
    const title = document.createElement("h2");
    title.classList = "post-title";
    title.innerHTML = post.titulo_postagem;

    return title;
}
function createContentHeaderElement(post) {
    const header = document.createElement("div");
    header.classList = "post-header";

    const title = createContentTitleElement(post);
    const category = createContentCategoryElement(post);

    header.appendChild(title);
    header.appendChild(category);
    return header;
}

function createContentElement(post) {
    const content = document.createElement("div");
    content.classList = "content";

    const header = createContentHeaderElement(post);
    const textArea = createTextAreaElement(post);
    const externalLink = createExternalLinkElement(post);

    content.appendChild(header);
    content.appendChild(textArea);
    content.appendChild(externalLink);

    return content;
}
async function createContainerElement() {
    const posts = await getPosts();
    const loader = document.getElementsByClassName('loader2');
    loader[0].classList = '';
    postArea.classList = '';
    posts.forEach(post => {
        const container = document.createElement("div");
        container.classList = "post-container row";

        const contentContainer = createContentElement(post);
        const imageContainer = createImageContainerElement(post);

        container.appendChild(contentContainer);
        //container.appendChild(imageContainer);

        postArea.appendChild(container);
    })
}
createContainerElement();