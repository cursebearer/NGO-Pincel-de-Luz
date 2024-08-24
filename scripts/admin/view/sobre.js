import SobreController from "/scripts/admin/controller/sobre.js";

const SALVAR = document.getElementById("salvar");
const DESCARTAR = document.getElementById("descartar");
const TEXTAREA = document.getElementById("sobre");

try {
    const text = await SobreController.loadText();
    TEXTAREA.innerHTML = text[0].texto;
} catch (error) {
    alert("Não foi possível carregar a página sobre");
    window.location.href("/pages/admin/home.html");
}

SALVAR.addEventListener("click", () => {
    SobreController.updateText(TEXTAREA.value);
});

