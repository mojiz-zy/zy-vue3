import { RouteRecordRaw } from "vue-router";
import { Menu } from "./Menu";
import router from "@/router/index";

const routes: Array<RouteRecordRaw> = [
  {
    name: "main",
    path: "/main",
    component: () => import("@/views/main/Main.vue"),
    children: [
      // {
      //   path: "",
      //   component: () => import("@/views/main/teacher/TeacherHome.vue")
      // },
      {
        path: "/reservation",
        component: () => import("@/views/main/teacher/Reservation.vue")
      },
      {
        path: "/teacher/students",
        component: () => import("@/views/main/teacher/Student.vue")
      }
    ]
  },
  {
    path: "/course",
    component: () => import("@/views/main/teacher/course.vue"),
    children: [
      {
        path: "add",
        component: () => import("@/components/addCourse.vue")
      },
      {
        path: "",
        component: () => import("@/components/editCourse.vue")
      },
      {
        path: "edit",
        component: () => import("@/components/courseEditSon.vue")
      },
      {
        path: "delete",
        component: () => import("@/components/delCourse.vue")
      },
      {
        path: "courseLabList",
        component: () => import("@/components/courseLabList.vue")
      },
      {
        path: "courseLabReserve",
        component: () => import("@/components/courseLabReserve.vue")
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
    title: "教师功能模块",
    children: [
      {
        title: "预约管理",
        path: "/reservation"
      },
      {
        title: "学生管理",
        path: "/teacher/students"
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
