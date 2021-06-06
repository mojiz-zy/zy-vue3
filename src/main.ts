import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

import { setRole } from "@/role/Role";
process.env.NODE_ENV == "development" && require("@/mock/index");

const roleId = sessionStorage.getItem("role");
// 获取本地保存的角色值，有则按角色渲染
if (roleId) {
  setRole(roleId);
}

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount("#app");
