import PostConnection from "/scripts/admin/api/PostConnection.js";

const button = document.getElementById("submit_post");

function validateTitle() {
    const title = document.getElementById("title");
    if (!title.value) {
        alert('Insira um título!');
        return 0;
    }
    return title.value;
}
function validateDesc() {
    const desc = document.getElementById("legenda");
    if (!desc.value) {
        alert("Insira uma descrição válida!");
        return 0;
    }
    return desc.value;
}
function validateCategory() {
    const category = document.getElementById("category");
    if (category.value == 0) {
        alert("Nenhuma categoria definida, categoria 'Postagem' definida.");
        category.value = 1;
    }
    return category.value;
}
button.addEventListener("click", async () => {
    const title = validateTitle();
    const desc = validateDesc();
    const category = validateCategory();
    if (!title || !desc) {
        alert("Postagem NÃO adicionada.");
        return 0;
    }
    await PostConnection.createPost(title, desc, category);
    window.location.reload();
});