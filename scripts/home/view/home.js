const POSTS_LOAD_RANGE = 5;
const token = "token"
let INITIAL_POSTS_COUNT = POSTS_LOAD_RANGE;

document.addEventListener("DOMContentLoaded", function () {
    loadPosts();
    document.getElementById("load-post").addEventListener("click", function () {
        increasePosts();
    });
});
function fetchInstagramError() {
    const postSection = document.getElementById("secao-postagens");
    const errorMessage = document.createElement("h3");
    errorMessage.style.color = "#fff";
    errorMessage.style.background = "red";
    errorMessage.innerHTML = "Não foi possível carregar as postagens, tente novamente mais tarde."

    postSection.appendChild(errorMessage);
}
function loadPosts() {
    fetch(buildApiUrl())
        .then(response => response.json())
        .then(data => renderPosts(data.data))
        .catch(e => fetchInstagramError());
}

function buildApiUrl() {
    return `https://graph.instagram.com/me/media?access_token=${token}&fields=media_url,media_type,caption,permalink`;
}

function renderPosts(postsData) {
    const postsContainer = document.getElementById("secao-postagens");
    postsContainer.innerHTML = '';

    postsData.slice(0, INITIAL_POSTS_COUNT).forEach(post => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
    });
}

function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('postagens-posts__post');

    const mediaContent = post.media_type === 'VIDEO' ?
        createVideoElement(post.media_url) :
        createImageElement(post.media_url, post.permalink);

    const captionElement = createCaptionElement(post.caption);

    postElement.appendChild(mediaContent);
    postElement.appendChild(captionElement);

    return postElement;
}

function createVideoElement(mediaUrl) {
    const videoElement = document.createElement('video');
    videoElement.classList.add('postagens-posts__post--imagem');
    videoElement.setAttribute('controls', true);

    const sourceElement = document.createElement('source');
    sourceElement.setAttribute('src', mediaUrl);
    sourceElement.setAttribute('type', 'video/mp4');

    videoElement.appendChild(sourceElement);

    return videoElement;
}

function createImageElement(mediaUrl, permalink) {
    const imgElement = document.createElement('img');
    imgElement.classList.add('postagens-posts__post--imagem');
    imgElement.setAttribute('src', mediaUrl);
    imgElement.setAttribute('alt', 'POSTAGEM');
    imgElement.addEventListener('click', function () {
        window.open(permalink);
    });

    return imgElement;
}

function createCaptionElement(caption) {
    const captionElement = document.createElement('p');
    captionElement.classList.add('postagens-posts__post--legenda');
    captionElement.textContent = truncateText(caption || '', 50);

    return captionElement;
}

function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

function increasePosts() {
    INITIAL_POSTS_COUNT += 5;
    loadPosts();
}