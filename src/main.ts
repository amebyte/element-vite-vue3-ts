import { createApp } from "vue";
import App from "./App2.vue";
import "./index.css";
const app = createApp(App);
app.config.globalProperties.$test = "test";
app.mount("#app");
