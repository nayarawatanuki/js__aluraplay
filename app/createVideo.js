import { video } from "../server/controllers/Video.js";

import { form, img, url ,title, description } from "./base/variables.js";

import { create } from "./controllers/Video.js";


form.addEventListener("submit", event => {
    event.preventDefault();

    create(video, img, url, title, description);
})
