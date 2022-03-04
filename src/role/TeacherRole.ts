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
        path: "/teacher/labReserve",
        component: () => import("@/views/main/teacher/labReserve.vue"),
        children: [
          {
            path: "",
            component: () => import("@/views/main/teacher/labList.vue")
          },
          {
            path: "oneReserve",
            component: () => import("@/components/labOneReserve.vue")
          },
          {
            path: "showSchedule",
            component: () => import("@/components/showSchedule.vue")
          },
          {
            path: "add",
            component: () => import("@/components/labAdd.vue")
          },
          {
            path: "delete",
            component: () => import("@/components/labDelete.vue")
          }
        ]
      },
      {
        path: "/teacher/courseManage",
        component: () => import("@/views/main/teacher/courseManage.vue"),
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
      }
      // {
      //   path: "/teacher/students",
      //   component: () => import("@/views/main/teacher/Student.vue")
      // }
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
    title: "Teacher Module",
    children: [
      {
        title: "Course Manage",
        path: "/teacher/courseManage"
      },
      {
        title: "Lab Reservation",
        path: "/teacher/labReserve"
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

