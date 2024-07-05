import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import piniaPersist from "pinia-plugin-persistedstate";
import Vue3Marquee from "vue3-marquee";

const pinia = createPinia();

const app = createApp(App);

app.use(Vue3Marquee)
pinia.use(piniaPersist)
app.use(router);
app.use(pinia);

app.mount("#app");
