import { VideoController } from "./controllers/Video.js";

import { searchButton, sectionFilter, searchMobile, searchForm } from "./components/variables.js";


let controller = new VideoController();

controller.list();

searchButton.addEventListener("click", event => {
    event.preventDefault();
    
    sectionFilter.style.display = "none";
    controller.search();
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