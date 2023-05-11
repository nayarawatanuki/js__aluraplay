export class VideoServer {

    constructor() {
        
        this._url = `http://localhost:3000/videos`;
    }
    
    async get() {
        
        try {
        
            const connection = await fetch(`${this._url}`);
            const videos = await connection.json();
        
            console.log(videos);
            return videos;
        } catch(error) {
            throw new Error(`Não foi possível carregar os vídeos: ${error}`);
        }

    }

    async post(image, url, title, description) {

        try {

            const connection = await fetch(`${this._url}` , {
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
        
            const video = await connection.json();
        
            console.log(video);
            return video;
        } catch(error) {
            throw new Error(`Não foi possível enviar o vídeo! ${error}`);
        }

    }
    
    async getOne(dataSearch) {

        try {

            this._url = `http://localhost:3000/videos?q=${dataSearch.value}`;

            const connection = await fetch(`${this._url}`);

            const video = connection.json();
        
            return video;
        } catch(error) {
            throw new Error(`Não foi possível encontrar um vídeo com esse título: ${error}`);
        }

    }
}