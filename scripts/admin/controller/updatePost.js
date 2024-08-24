import PostConnection from "/scripts/admin/api/PostConnection.js";

const button = document.getElementById("confirm_button");

document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const post = await PostConnection.getSpecific(id);
    document.getElementById("title").value = (post.rows[0].titulo_postagem);
    document.getElementById("desc").value = (post.rows[0].legenda_postagem);
    document.getElementById("category").value = (post.rows[0].categoria_postagem);
    console.log(post.rows[0]);
});



function validateTitle() {
    const title = document.getElementById("title");
    if (!title.value) {
        alert('Insira um título!');
        return null;
    }
    return title.value;
}

function validateDesc() {
    const desc = document.getElementById("desc");
    if (!desc.value) {
        alert("Insira uma descrição válida!");
        return null;
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

function validateId() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (!id) {
        alert('ID inválido na URL!');
        return null;
    }
    return parseInt(id);
}

button.addEventListener("click", async () => {
    console.log("Botão clicado"); // Verifique se este log aparece no console
    const id = validateId();
    if (!id) {
        console.log("sem id na url")
        return;
    }
    const title = validateTitle();
    const desc = validateDesc();
    const category = validateCategory();

    if (!title || !desc) {
        alert("Postagem NÃO adicionada.");
        return;
    }

    await PostConnection.updatePost(id, title, desc, category);

    alert("Alterações realizadas");
    window.location.href = '/pages/admin/home.html';
});