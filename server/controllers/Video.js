async function list() {

    const connection = await fetch("http://localhost:3000/videos");
    const videos = await connection.json();

    console.log(videos);
    return videos;
}

async function create(image, url, title, description) {

    const connection = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            image: image,
            url: url,
            title: title,
            description: `${description} mil visualizações`
        })
    });

    if(!connection.ok) {
        throw new Error("Não foi possível enviar o vídeo!");
    }

    const video = await connection.json();

    console.log(video);
    return video;
}

async function search(dataSearch) {
    
    const connection = await fetch(`http://localhost:3000/videos?q=${dataSearch}`);
    const video = connection.json();

    return video;
}

export const video = { list, create, search }