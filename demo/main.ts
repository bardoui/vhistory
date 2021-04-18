import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { installHistory } from "../src/vHistory";
createApp(App)
    .use(router)
    .mount("#app");
installHistory(router);
