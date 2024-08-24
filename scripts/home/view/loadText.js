import TextConnection from "/scripts/home/api/textConnection.js";

const TEXTAREA = document.getElementById("quem_somos");
const DEFAULT_TEXT = `A partir do desejo de um grupo de amigos, a ONG Pincel de Luz tem como objetivo
                    investir em ações sociais para apoiar a formação de jovens e crianças.
                    Fundada em 13.10.2015 com um único desejo no coração: Contribuir com um
                    mundo melhor.
                    Após muitos encontros, firmou-se que trabalhar com crianças seria uma bela forma de começar.
                    E
                    assim, hoje, com quase 9 anos, nos sentimos muito gratos em poder olhar pra trás e ter a
                    certeza
                    de que estamos fazendo isso.`;
document.body.addEventListener("DOMContentLoaded", implementsText())

function getText() {
    return TextConnection.getText();

}
async function implementsText() {
    const text = await getText();
    TEXTAREA.innerHTML = text[0].texto || DEFAULT_TEXT;
}