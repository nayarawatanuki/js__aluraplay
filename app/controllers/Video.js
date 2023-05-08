async function list(api, sectionVideos, videoCard) {

    try {

        const listAPI = await api.list();
        listAPI.forEach(element => sectionVideos.appendChild(
            videoCard(element.image, element.url, element.title, element.description)));
    } catch {
        sectionVideos.innerHTML = `
            <h2 class="message__title">
                Não foi possível carregar a lista de videos.
            </h2>
        `
    }
}

async function create(api, img, url, title, description) {

    try {
        await api.create(img.value, url.value, title.value, description);

        window.location.href = "../pages/messages/sent.html";
    } catch(e) {
        alert(e);
    }

}

async function search(api, dataSearch, sectionVideos, videoCard) {
    const searchAPI = await api.search(dataSearch.value);

    console.log(searchAPI);

    while(sectionVideos.firstChild) {
        sectionVideos.removeChild(sectionVideos.firstChild);
    }

    searchAPI.forEach(element => sectionVideos.appendChild(videoCard(element.image, element.url, element.title, element.description)));

    if(searchAPI.length == 0) {
        sectionVideos.innerHTML = `
            <h2 class="message__title">
                Não existem vídeos com esse título. 
            </h2>
        `
    }
}

export { list, create, search }