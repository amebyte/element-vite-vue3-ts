import { createApp } from "vue";
import App from "./App3.vue";
import "./index.css";
// console.log("process", process);
const app = createApp(App);
app.config.globalProperties.$test = "test";
app.mount("#app");
