import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import Antdv from "ant-design-vue";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(Antdv);

app.mount("#app");
