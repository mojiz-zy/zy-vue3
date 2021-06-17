import { ActionTree, createStore } from "vuex";
import { Menu } from "@/role/Menu";
import router from "@/router";
import * as types from "./VuexTypes";
import axios from "@/axios";
import { ResultVO } from "./Response";
import { setRole } from "@/role/Role";
import { Teacher, Lab, Course } from "@/datasource/Type";

export interface State {
  menuList?: Menu[];
  exception?: string;
  teacherList?: Teacher[];
  labList?: Lab[];
  role?: number | null;
  isLogin?: boolean;
  courses?: Course[];
}

const state: State = {
  menuList: [],
  exception: "",
  teacherList: [],
  labList: []
};

const getters = {
  premission: () => (level: string[]) =>
    level.some(l => l == sessionStorage.getItem("role"))
};
const mutations = {
  // [types.UPDATE_EXCEPTION]: (state: State, data: string) => (state.exception = data),
  [types.LIST_TEACHERS]: (state: State, data: Teacher) =>
    state.teacherList?.push(data),
  [types.SET_LABLIST]: (state: State, data: Lab[]) => (state.labList = data),
  [types.ADD_COURSE]: (state: State, data: Course) => state.courses?.push(data),
  [types.GET_LABLIST]: (state: State, data: Lab[]) => (state.labList = data),
  [types.GET_TEACHERS]: (state: State, data: Teacher[]) =>
    (state.teacherList = data),
  [types.ADD_LAB]: (state: State, data: Lab) => state.labList?.push(data),
  [types.GET_COURSES]: (state: State, data: Course[]) => (state.courses = data),
  [types.ADD_COURSE]: (state: State, data: Course) => state.courses?.push(data)
};
const actions: ActionTree<State, State> = {
  [types.LOGIN]: async (_, data: any) => {
    // 此处向后端发出登录请求。后端返回token以及加密role，置于sessionstorage
    // 每次请求在header中携带token
    // 并基于role加载对应的角色权限路由/功能列表等信息，也可加载对应的API请求操作
    const resp = await axios.post<ResultVO>("login", data);
    if (resp.data.code == 200) {
      const roleId = resp.headers.role;
      setRole(roleId);
      sessionStorage.setItem("role", roleId);
      sessionStorage.setItem("token", resp.headers.token);
      router.push("/teacherhome");
    }
  },
  [types.GET_LABLIST]: async ({ commit }) => {
    // const resp = await axios.get("api/lablist");
    const resp = await axios.get("lablist");
    commit(types.SET_LABLIST, resp.data.data.labs);
  },
  [types.DELETE_TEACHER]: async ({ state }, number: any) => {
    const resp = await axios.post("deleteTeachers", number);
    if (resp.status == 200) {
      alert("删除成功");
    }
  },
  [types.ADD_TEACHERS]: async ({ commit, state }, teacher: any) => {
    const resp = await axios.post("addTeachers", teacher);
    console.log("ADD", resp.data.data);
    commit(types.LIST_TEACHERS, resp.data.data);
    // if(resp.status == 200){
    //   teacher.id = resp.data.data.id;
    //   state.teacherList?.push(teacher)
    // }
  }, //添加教师信息
  [types.SUBMIT_LABLIST]: async ({ state }, labList: any) => {
    const resp = await axios.post<ResultVO>("submitLablist", labList);
    if (resp.status == 200) {
      alert("预约成功");
    }
  },
  [types.GET_TEACHERS]: async ({ commit, state }, teacherList: any) => {
    const resp = await axios.get<ResultVO>("getTeachers");
    console.log(resp.data.data.teachers);
    commit(types.GET_TEACHERS, resp.data.data.teachers);
  },
  [types.UPDATE_TEACHER]: async ({ commit, state }, teacherUpdate: any) => {
    const resp = await axios.post<ResultVO>("updateTeachers", teacherUpdate);
    if (resp.status == 200) {
      alert("修改成功");
    }
    console.log("update_teacher", resp.data.data);
  }, //修改教师信息（姓名，职称)
  [types.UPDATE_TEACHER_PASSWORD]: async ({ commit }, password: string) => {
    const resp = await axios.post<ResultVO>("updateTeacherPassword", password);
    console.log("update_teacher_password", resp.data.data);
  },
  [types.ADD_LAB]: async ({ commit, state }, lab: any) => {
    const resp = await axios.post<ResultVO>("addLabs", lab);
    console.log("add_lab", resp.data.data);
  },
  [types.UPDATE_LAB]: async ({ state }, lab: any) => {
    const resp = await axios.post<ResultVO>("updateLabs", lab);
    console.log("updateLabs", resp.data.data);
  },
  [types.DELETE_LAB]: async ({ state }, number: any) => {
    const resp = await axios.post("deleteLabs", number);
    if (resp.status == 200) {
      alert("删除成功");
    }
  },
  [types.GET_COURSES]: async ({ commit }, courses: Course[]) => {
    const resp = await axios.get("/getCourses");
    const courseList: Course[] = [];
    const teacherNum = sessionStorage.getItem("teacherNum"); //获取sessionStorage中的教师编号
    console.log("/getCourses", resp.data.data.courses);
    resp.data.data.courses.forEach((c: any) => {
      if (c.teacherNum == teacherNum) {
        courseList.push(c);
      }
    });
    console.log(courseList);
    courses = courseList;
    console.log("courses:", courses);

    commit(types.GET_COURSES, courses);
  },
  [types.ADD_COURSE]: async ({ commit }, course: Course) => {
    const resp = await axios.post<ResultVO>("addCourses", course);
    if (resp.status == 200) {
      alert("添加成功");
    }
    console.log("add_course", resp.data.data);
  },
  [types.DELETE_COURSE]: async ({ state }, number: any) => {
    const resp = await axios.post("deleteCourses", number);
    if (resp.status == 200) {
      alert("删除成功");
    }
  },
  [types.UPDATE_COURSE]: async ({ state }, course: Course) => {
    const resp = await axios.post<ResultVO>("updateCourses", course);
    console.log("updateCourses", resp.data.data);
  }
};

export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
});
