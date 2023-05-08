function videoCard(image, url, title, description) {

    const video = document.createElement("figure");
    video.classList.add("videos__item");
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <figcaption class="video__description">
            <img src="${image}" alt="">
            
            <h3>${title}</h3>
            <span>${description}</span>
        </figcaption>
    `

    return video;
}

export { videoCard }