import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { ResultVO } from "@/store/Response";
import { TEACHER, DIRECTOR, ADMIN } from "@/role/Role";

const mock = new MockAdapter(axios);

const resulVO: ResultVO = {
  code: 200,
  data: {}
};
const course = { courseId: "3", name: "web框架", teacherNum: "100" };
const schedule1 = {
  course: course,
  week: "1",
  order: "3",
  day: "2",
  state: false
};
const scheduleArr = [];
const scheduleArr901 = [];
for (let i = 1; i < 19; i++) {
  for (let j = 1; j < 8; j++) {
    for (let k = 1; k < 6; k++) {
      scheduleArr901.push({
        week: i,
        order: k,
        day: j,
        state: true,
        course: "无"
      });
      if (i == 1 && j == 2 && k == 3) {
        scheduleArr901.pop();
        scheduleArr901.push(schedule1);
      }
    }
  }
}
for (let i = 1; i < 19; i++) {
  for (let j = 1; j < 8; j++) {
    for (let k = 1; k < 6; k++) {
      scheduleArr.push({
        week: i,
        order: k,
        day: j,
        state: true,
        course: "无"
      });
    }
  }
}
mock.onPost("updateCourses").reply(c => {
  const data = c.data;
  if (data) {
    resulVO.data = data;
    console.log("mock-updateleteCourses", data);
    console.log("成功向updateleteCourses提交删除信息");

    return [200, resulVO];
  }
  resulVO.code = 401;
  resulVO.message = "提交错误";
  return [200, resulVO];
});

mock.onPost("deleteCourses").reply(c => {
  const data = c.data;
  if (data) {
    resulVO.data = data;
    console.log("mock-deleteCourses", data);
    console.log("成功向deleteCourses提交删除信息");

    return [200, resulVO];
  }
  resulVO.code = 401;
  resulVO.message = "提交错误";
  return [200, resulVO];
});

mock.onPost("/addCourses").reply(c => {
  const data = c.data;
  if (data) {
    resulVO.data = data;
    console.log("mock-addCourses", data);
    console.log("成功向addCourses提交新信息");

    return [200, resulVO];
  }
  resulVO.code = 401;
  resulVO.message = "提交错误";
  return [200, resulVO];
});
mock.onGet("/getCourses").reply(200, {
  code: 200,
  data: {
    courses: [
      {
        courseId: "1",
        name: "java程序设计",
        teacherNum: 100,
        studentNum: 50,
        hours: 6
      },
      {
        courseId: "2",
        name: "C语言程序设计",
        teacherNum: 100,
        studentNum: 30,
        hours: 6
      },
      {
        courseId: "2",
        name: "C语言程序设计",
        teacherNum: 101,
        studentNum: 50,
        hours: 6
      }
    ]
  }
});
mock.onPost("deleteLabs").reply(c => {
  const data = c.data;
  if (data) {
    resulVO.data = data;
    console.log("mock-deleteLabs", data);
    console.log("成功向deleteLabs提交删除信息");

    return [200, resulVO];
  }
  resulVO.code = 401;
  resulVO.message = "提交错误";
  return [200, resulVO];
});
mock.onPost("updateLabs").reply(c => {
  const data = c.data;
  if (data) {
    resulVO.data = data;
    console.log("mock-updateLabs", data);
    console.log("成功向updateLabs提交修改信息");

    return [200, resulVO];
  }
  resulVO.code = 401;
  resulVO.message = "提交错误";
  return [200, resulVO];
});
mock.onPost("addLabs").reply(c => {
  const data = c.data;
  if (data) {
    resulVO.data = data;
    console.log("mock-addLabs", data);
    console.log("成功向addLabs提交修改信息");

    return [200, resulVO];
  }
  resulVO.code = 401;
  resulVO.message = "提交错误";
  return [200, resulVO];
});
mock.onPost("deleteTeachers").reply(c => {
  const data = c.data;
  if (data) {
    resulVO.data = data;
    console.log("mock-deleteTeachers", data);
    console.log("成功向deleteTeachers提交删除信息");

    return [200, resulVO];
  }
  resulVO.code = 401;
  resulVO.message = "提交错误";
  return [200, resulVO];
});

mock.onPost("updateTeacherPassword").reply(c => {
  const data = c.data;
  if (data) {
    resulVO.data = data;
    console.log("mock-updateTeacherPassword", data);
    console.log("成功向uupdateTeacherPassword提交修改信息");

    return [200, resulVO];
  }
  resulVO.code = 401;
  resulVO.message = "提交错误";
  return [200, resulVO];
});

mock.onPost("updateTeachers").reply(c => {
  const data = c.data;
  if (data) {
    resulVO.data = data;
    console.log("mock-updateTeachers", data);
    console.log("成功向updateTeachers提交修改信息");

    return [200, resulVO];
  }
  resulVO.code = 401;
  resulVO.message = "提交错误";
  return [200, resulVO];
});

mock.onPost("addTeachers").reply(c => {
  const data = c.data;
  if (data) {
    resulVO.data = data;
    console.log("mock-Add", data);
    console.log("成功向addTeachers提交信息");

    return [200, resulVO];
  }
  resulVO.code = 401;
  resulVO.message = "提交错误";
  return [200, resulVO];
});
mock.onGet("getTeachers").reply(200, {
  code: 200,
  data: {
    teachers: [
      {
        name: "张伟",
        title: "教授",
        number: "100"
      },
      {
        name: "朱东坡",
        title: "副教授",
        number: "101"
      },
      {
        name: "张剑腾",
        title: "教授",
        number: "102"
      }
    ]
  }
});
mock.onPost("submitLablist").reply(c => {
  const data = c.data;
  if (data) {
    resulVO.data = data;
    return [200, resulVO];
  }

  resulVO.code = 401;
  resulVO.message = "提交错误";
  return [200, resulVO];
});
mock.onGet("lablist").reply(200, {
  code: 200,
  data: {
    labs: [
      {
        number: "901",
        computerNumber: "60",
        schedule: scheduleArr901
      },
      {
        number: "902",
        computerNumber: "40",
        schedule: scheduleArr
      },
      {
        number: "903",
        computerNumber: "50",
        schedule: scheduleArr
      }
    ]
  }
});
// config，axios config对象。包含请求信息
// 返回数组，[status, {data对象}, {header对象}]
mock.onPost("login").reply(c => {
  console.log("mock login");

  const resultVO: ResultVO = { code: 200 };
  // 获取请求数据
  // 此时请求的js对象已转为json字符串。因此需要转换回JS对象
  const data = c.data;
  const { number, password } = JSON.parse(data);

  // 模拟teacher
  if (number == "1001" && password == "1001") {
    return [
      200,
      resultVO,
      {
        role: TEACHER,
        token:
          "744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6"
      }
    ];
  }
  // 模拟主任
  /*if (number == "1002" && password == "1002") {
    return [
      200,
      resultVO,
      {
        role: DIRECTOR,
        token:
          "744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6",
      },
    ];
  }*/
  // 模拟admin
  if (number == "2002" && password == "2002") {
    return [
      200,
      resultVO,
      {
        role: ADMIN,
        token:
          "744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6"
      }
    ];
  }

  resultVO.code = 401;
  resultVO.message = "用户名密码错误";
  return [200, resultVO];
});

// 模拟请求携带token是否合法
mock.onGet("home").reply(c => {
  const resultVO: ResultVO = { code: 200 };
  const auth = c.headers?.authorization;
  if (
    auth ==
    "744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6"
  ) {
    resultVO.code = 200;
    resultVO.data = { courses: [] };
    return [200, resultVO];
  }
  resultVO.code = 403;
  resultVO.message = "无权限";
  return [200, resultVO];
});
