function createIconElement() {
    const ICON_ELEMENT = document.createElement("div");
    const ICON_LINK_ELEMENT = document.createElement("a");
    const ICON_IMG_ELEMENT = document.createElement("img");

    ICON_LINK_ELEMENT.setAttribute("href", "/index.html");
    ICON_IMG_ELEMENT.setAttribute("src", "/img/icon_ong.jpg");
    ICON_IMG_ELEMENT.setAttribute("alt", "Pincel De Luz");
    ICON_IMG_ELEMENT.classList = "header-icon";

    ICON_LINK_ELEMENT.appendChild(ICON_IMG_ELEMENT);
    ICON_ELEMENT.appendChild(ICON_LINK_ELEMENT);

    return ICON_ELEMENT;
}

function createMenuElement() {
    const MENU_CONTAINER = document.createElement("div");
    const MENU_BUTTONS = document.createElement("div");
    MENU_BUTTONS.classList = "mr-5";
    MENU_BUTTONS.id = "botoes-header";

    const MENU_LINK = createMenuLinksElement();
    const MENU_SOCIAL_MEDIA = createSocialMediaElement();
    const DONATE_BUTTON = createDonateElement();

    MENU_BUTTONS.appendChild(MENU_LINK);
    MENU_BUTTONS.appendChild(MENU_SOCIAL_MEDIA);
    MENU_BUTTONS.appendChild(DONATE_BUTTON);
    MENU_CONTAINER.appendChild(MENU_BUTTONS);

    return MENU_CONTAINER;
}

function createDonateElement() {
    const BUTTON_CONTAINER = document.createElement("div");
    const BUTTON_LINK = document.createElement("a");

    BUTTON_CONTAINER.classList = "header-button d-none d-md-block";
    BUTTON_LINK.setAttribute("href", "/pages/home/contribua.html");
    BUTTON_LINK.classList = "header-button__link";
    BUTTON_LINK.innerHTML = "CONTRIBUA AGORA";

    BUTTON_CONTAINER.appendChild(BUTTON_LINK);

    return BUTTON_CONTAINER;
}

function createMenuLinksElement() {
    const LIST = document.createElement("ul");
    LIST.classList = "d-flex header-menu";
    let list_items = [
        ["Home", "/index.html"],
        ["Ações", "/pages/home/acoes.html"],
        ["Contato", "/pages/home/contato.html"]
    ];

    for (let i = 0; i < list_items.length; i++) {
        let LIST_ITEM = document.createElement("li");
        LIST_ITEM.classList = "header-menu__item";

        let LIST_LINK = document.createElement("a");
        LIST_LINK.classList = "header-menu__link";
        LIST_LINK.innerHTML = list_items[i][0];
        LIST_LINK.setAttribute("href", list_items[i][1]);

        LIST_ITEM.appendChild(LIST_LINK);
        LIST.appendChild(LIST_ITEM);
    }

    return LIST;
}
function createSocialMediaElement() {
    const LIST = document.createElement("ul");
    LIST.classList = "justify-content-between d-none d-sm-flex header-menu";
    const ICONS = ["fa-brands fa-facebook fa-lg", "fa-brands fa-instagram fa-xl"];
    const LINKS = ["https://web.facebook.com/ongpinceldeluz","https://www.instagram.com/pinceldeluz.ass?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="];

    for (let i = 0; i < ICONS.length; i++) {
        const LIST_ITEM = document.createElement("li");
        const LIST_LINK = document.createElement("a");
        const LIST_ICON = document.createElement("i");
        LIST_ITEM.classList = "header-menu__item";
        LIST_LINK.classList = "header-menu__link";
        LIST_LINK.setAttribute("href", LINKS[i]);
        LIST_ICON.classList = ICONS[i];

        LIST_LINK.appendChild(LIST_ICON);
        LIST_ITEM.appendChild(LIST_LINK);
        LIST.appendChild(LIST_ITEM);
    }
    return LIST;
}

function createHeaderElement() {
    const HEADER = document.getElementById("header");
    const HEADER_CONTAINER = document.createElement("div");

    HEADER.classList = "header";
    HEADER_CONTAINER.classList = "header-container container d-flex justify-content-between align-items-center";

    const HEADER_ICON = createIconElement();
    const HEADER_MENU = createMenuElement();

    HEADER_CONTAINER.appendChild(HEADER_ICON);
    HEADER_CONTAINER.appendChild(HEADER_MENU);

    HEADER.appendChild(HEADER_CONTAINER);
}

createHeaderElement();