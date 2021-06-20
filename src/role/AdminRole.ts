import { RouteRecordRaw } from "vue-router";
import { Menu } from "./Menu";
import router from "@/router/index";

const routes: Array<RouteRecordRaw> = [
  {
    name: "main",
    path: "/main",
    component: () => import("@/views/main/Main.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/main/admin/AdminHome.vue")
      },
      {
        path: "/admin/backup",
        component: () => import("@/views/main/admin/Backup.vue")
      },
      {
        path: "/admin",
        component: () => import("@/views/main/admin/adminManage.vue")
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "main" }
  }
];

// ----------------

const menuList: Menu[] = [
  {
    title: "Admin Module",
    children: [
      {
        title: "Admin",
        path: "/admin"
      },
      {
        title: "BackUp",
        path: "/admin/backup"
      }
    ]
  }
];

// --------------------

export function getRoleMenus() {
  router.removeRoute("nomatch");
  routes.forEach(r => router.addRoute(r));
  return menuList;
}
