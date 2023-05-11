import { VideoController } from "./controllers/Video.js";

import { form } from "./components/variables.js";

const controller = new VideoController();

form.addEventListener("submit", event => {
    event.preventDefault();

    controller.create();
})
