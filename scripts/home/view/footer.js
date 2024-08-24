function createFooterLinkElement() {
    const FOOTER_MENU = document.createElement("div");
    FOOTER_MENU.innerHTML = "Sugestões ou dúvidas?";
    const FOOTER_MENU_LINK = document.createElement("a");
    FOOTER_MENU_LINK.classList = "footer-menu__link";
    FOOTER_MENU_LINK.setAttribute("href", "/pages/home/contribua.html");
    FOOTER_MENU_LINK.innerHTML = "Entre em contato";

    FOOTER_MENU.appendChild(FOOTER_MENU_LINK);

    return FOOTER_MENU;
}

function createFooterMenuElement() {
    const FOOTER_MENU = document.createElement("div");
    FOOTER_MENU.classList = "footer-menu";
    const menu_items = [
        ["#", "fa-solid fa-envelope", "ongpinceldeluz@gmail.com"],
        ["https://web.facebook.com/ongpinceldeluz", "fa-brands fa-facebook", "ONG Pincel de Luz"],
        ["https://www.instagram.com/pinceldeluz.ass?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "fa-brands fa-instagram fa-lg", "@pinceldeluz.ass"]
    ];

    for (let i = 0; i < menu_items.length; i++) {

        const FOOTER_MENU_ITEM = document.createElement("div");
        FOOTER_MENU_ITEM.classList = "footer-menu__item";

        const FOOTER_MENU_LINK = document.createElement("a");

        FOOTER_MENU_LINK.classList = "footer-menu__link";
        FOOTER_MENU_LINK.setAttribute("href", menu_items[i][0]);

        const FOOTER_MENU_ICON = document.createElement("i");
        FOOTER_MENU_ICON.classList = menu_items[i][1];

        const FOOTER_MENU_CONTENT = document.createElement("span");
        FOOTER_MENU_CONTENT.classList = "footer-menu__link--rede";
        FOOTER_MENU_CONTENT.innerHTML = menu_items[i][2];

        //append child
        FOOTER_MENU_LINK.appendChild(FOOTER_MENU_ICON);
        FOOTER_MENU_LINK.appendChild(FOOTER_MENU_CONTENT);
        FOOTER_MENU_ITEM.appendChild(FOOTER_MENU_LINK)

        FOOTER_MENU.appendChild(FOOTER_MENU_ITEM);
    }

    return FOOTER_MENU;
}

function createFooterElement() {
    const FOOTER = document.createElement("footer");
    FOOTER.classList = "d-flex align-items-center text-white justify-content-around footer p-2";

    const FOOTER_LINK = createFooterLinkElement();
    const FOOTER_MENU = createFooterMenuElement();
    FOOTER.appendChild(FOOTER_LINK);
    FOOTER.appendChild(FOOTER_MENU);

    document.body.appendChild(FOOTER);
}

createFooterElement();
