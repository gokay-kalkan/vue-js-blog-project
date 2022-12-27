/* eslint-disable no-unused-vars */
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import store from "@/stores/usePostStore";
import storeLike from "@/stores/useLikeStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

createApp(App)
  .use(createPinia())
  .use(router)
  .use(store, storeLike)
  .mount("#app");
