import { createApp } from "vue";
import App from "./App3.vue";
import "./index.css";
import { MyKeepAlive } from "./component3";
const app = createApp(App);
app.component("MyKeepAlive", MyKeepAlive);
// app.config.globalProperties.$test = "test";
app.mount("#app");
