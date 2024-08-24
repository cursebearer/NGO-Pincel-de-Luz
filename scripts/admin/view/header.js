const USER_NAME = "Administrador";

document.body.addEventListener("onload", createHeaderElement());
function createExitButtonElement() {
    const EXIT_BUTTON = document.createElement("div");
    EXIT_BUTTON.classList = "header-button";
    const BUTTON = document.createElement("a");
    BUTTON.setAttribute("href", "#");
    BUTTON.classList = "header-button__link";
    BUTTON.innerHTML = "Sair";
    BUTTON.addEventListener("click", () => {
        window.sessionStorage.removeItem("user");
        window.location.reload();
    })
    EXIT_BUTTON.appendChild(BUTTON);
    return EXIT_BUTTON;
}

function createHeaderMenuElement() {
    let returnLink = (link, texto) => {
        return {
            link,
            texto
        }
    }
    const HEADER_MENU = document.createElement("div");
    HEADER_MENU.classList = "header-menu";

    const botao_1 = returnLink("/pages/admin/home.html", "Postagens");
    const botao_2 = returnLink("/pages/admin/sobre.html", "Sobre");
    const botao_3 = returnLink("/pages/admin/contato.html", "Contato");
    const botoes = [botao_1, botao_2, botao_3];

    botoes.forEach((botao) => {
        const LINK = document.createElement("a");
        LINK.classList = "header-menu__link";
        LINK.setAttribute("href", botao.link);

        const BUTTON = document.createElement("button");
        BUTTON.classList = "header-menu__button";
        BUTTON.setAttribute("type", "button");
        BUTTON.innerHTML = botao.texto;

        LINK.appendChild(BUTTON);
        HEADER_MENU.appendChild(LINK)
    })
    return HEADER_MENU;
}

function createHeaderNameElement() {
    const HEADER_HOME_NAME = document.createElement("h2");
    HEADER_HOME_NAME.classList = "header-name d-block d-none d-sm-block";
    HEADER_HOME_NAME.innerHTML = "Seja bem vindo(a) ";

    //escrevo o nome do usuário
    const HEADER_HOME_NAME_SPAN = document.createElement("span");
    HEADER_HOME_NAME_SPAN.innerHTML = USER_NAME;

    HEADER_HOME_NAME.appendChild(HEADER_HOME_NAME_SPAN);

    return HEADER_HOME_NAME;
}

function createHeaderHomeIconElement() {
    const HEADER_HOME_ICON = document.createElement("a");
    HEADER_HOME_ICON.setAttribute("href", "/index.html");

    const HEADER_HOME_IMAGE = document.createElement("img");
    HEADER_HOME_IMAGE.classList = "header-icon mr-2 d-none d-md-block";
    HEADER_HOME_IMAGE.setAttribute("src", "/img/icon_ong.jpg");
    HEADER_HOME_IMAGE.setAttribute("alt", "ONG Pincel De Luz");

    HEADER_HOME_ICON.appendChild(HEADER_HOME_IMAGE);

    return HEADER_HOME_ICON;
}

function createHeaderHomeElement() {
    const HEADER_HOME = document.createElement("div");
    HEADER_HOME.classList = "d-flex align-items-center header-home";
    const HEADER_HOME_ICON = createHeaderHomeIconElement();
    const HEADER_HOME_NAME = createHeaderNameElement();

    HEADER_HOME.appendChild(HEADER_HOME_ICON);
    HEADER_HOME.appendChild(HEADER_HOME_NAME);
    return HEADER_HOME;
}

function createHeaderContainerElement() {
    const HEADER_CONTAINER = document.createElement("div");
    HEADER_CONTAINER.classList = "container d-flex align-items-center justify-content-between";
    return HEADER_CONTAINER;
}

function createHeaderElement() {
    const HEADER = document.getElementById("header");
    HEADER.classList = "header";

    const HEADER_CONTAINER = createHeaderContainerElement();
    const HEADER_HOME = createHeaderHomeElement();
    const HEADER_MENU = createHeaderMenuElement();
    const EXIT_BUTTON = createExitButtonElement();
    HEADER_CONTAINER.appendChild(HEADER_HOME);
    HEADER_CONTAINER.appendChild(HEADER_MENU);
    HEADER_CONTAINER.appendChild(EXIT_BUTTON);
    HEADER.appendChild(HEADER_CONTAINER);
}

