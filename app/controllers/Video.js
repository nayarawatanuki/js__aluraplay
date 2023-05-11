import { VideoServer } from "../../server/controllers/Video.js";
import { VideosView } from "../views/Videos.js";


export class VideoController {

    constructor() {

        let $ = document.querySelector.bind(document); //bind indica que a função/metodo pertence ao objeto.
        this._service = new VideoServer();

        this._section = $("[data-list]");

        this._image = $("[data-img]");
        this._url = $("[data-url]");
        this._title = $("[data-title]");
        this._description = Math.floor(Math.random() * 10).toString();

        this._searchData = $("[data-searchInput]");

    } // evita percorrer o DOM muitas vezes

    // _cleanForm() {

    //     this._form.reset();
    // }

    async list() {

        try {

            await this._service.get()
            .then(videos => {
    
                videos.forEach(video => {
                    this._section.appendChild(

                        new VideosView().template(video.image, video.url, video.title, video.description))
                })
            });
        }
        catch(error) {

            alert(error);
        }
    }

    async create() {
        
        try{

            await this._service.post(this._image.value, this._url.value, this._title.value, this._description)
            // this._listVideos.add(this._create());
            window.location.href = "../pages/messages/sent.html";
        } catch(error) {
            alert(error);
        }
    }

    async search() {

        try {

            const searchAPI = await this._service.getOne(this._searchData);

            console.log(searchAPI);
    
            while(this._section.firstChild) {
                this._section.removeChild(this._section.firstChild);
            }
        
            searchAPI.forEach(element => this._section.appendChild(new VideosView().template(element.image, element.url, element.title, element.description)));
        
            if(searchAPI.length == 0) {
                this._section.innerHTML = `
                    <h2 class="message__title">
                        Não existem vídeos com esse título. 
                    </h2>
                `
            }
        } catch(error) {
            alert(error);
        }

    }
}