import { video } from "../server/controllers/Video.js";

import { searchData, searchButton, sectionVideos, sectionFilter, searchMobile, searchForm } from "./base/variables.js";

import { list, search } from "./controllers/Video.js";

import { videoCard } from "./components/videos/show.js";


list(video, sectionVideos, videoCard);

searchButton.addEventListener("click", event => {
    event.preventDefault();
    
    sectionFilter.style.display = "none";
    search(video, searchData, sectionVideos, videoCard);
})

searchMobile.addEventListener("click", event => {
    event.preventDefault();

    if(searchMobile.innerHTML == "X") {
        searchMobile.style.backgroundImage = "url(../assets/imgs/header/search/search.png)";
        searchMobile.innerHTML = "";
        searchForm.style.display = "none";
    } else {
        searchMobile.style.backgroundImage = "none";        
        searchMobile.innerHTML = "X";
        searchForm.style.display = "flex";
    }
})