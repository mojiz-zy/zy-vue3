<template>
  <div class="scheMain">
    <el-table
      class="order"
      :data="tableData1"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="day" label="" width="180"></el-table-column>
    </el-table>

    <el-table
      class="class"
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column
        prop="order1"
        label="第一节"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="order2"
        label="第二节"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="order3"
        label="第三节"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="order4"
        label="第四节"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="order5"
        label="第五节"
        width="180"
      ></el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const route = useRoute();
    const labNum = route.query.labNum;
    const week = route.query.weekInput;
    console.log(labNum, week);
    const store = useStore();
    let weekSchedule: any = [];
    const tableData1 = [
      { day: "星期一" },
      { day: "星期二" },
      { day: "星期三" },
      { day: "星期四" },
      { day: "星期五" },
      { day: "星期六" },
      { day: "星期日" }
    ];
    const tableData3: any = [
      {
        day1: "1",
        day2: "2",
        day3: "3",
        day4: "4",
        day5: "5",
        day6: "6",
        day7: "7"
      },
      { day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
      { day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" }
    ];
    const tableData: any = [];
    const t1 = ref({
      order1: "1",
      order2: "2",
      order3: "3",
      order4: "4",
      order5: "5"
    });
    const t2 = ref({
      order1: "1",
      order2: "2",
      order3: "3",
      order4: "4",
      order5: "5"
    });
    const t3 = ref({
      order1: "1",
      order2: "2",
      order3: "3",
      order4: "4",
      order5: "5"
    });
    const t4 = ref({
      order1: "1",
      order2: "2",
      order3: "3",
      order4: "4",
      order5: "5"
    });
    const t5 = ref({
      order1: "1",
      order2: "2",
      order3: "3",
      order4: "4",
      order5: "5"
    });
    const t6 = ref({
      order1: "1",
      order2: "2",
      order3: "3",
      order4: "4",
      order5: "5"
    });
    const t7 = ref({
      order1: "1",
      order2: "2",
      order3: "3",
      order4: "4",
      order5: "5"
    });
    const c = { order: "", day: "", course: "" };
    store.state.labList.forEach((lab: any) => {
      if (lab.number == labNum) {
        weekSchedule = lab.schedule;
      }
    }); //找到labNum实验室的学期课程表
    const count = 0;
    weekSchedule.forEach((w: any) => {
      if (w.week == week) {
        //找到所查询的那周
        // console.log("worder", w.order, "wday", w.day, "wcourse", w.course);
        c.order = w.order;
        c.day = w.day;
        c.course = w.course;
        if (w.day == 1) {
          if (w.order == 1) {
            if (w.course != "无" && w.course != "临时预约") {
              t1.value.order1 = w.course.name;
            } else {
              t1.value.order1 = w.course;
            }
          }
          if (w.order == 2) {
            if (w.course != "无" && w.course != "临时预约") {
              t1.value.order2 = w.course.name;
            } else {
              t1.value.order2 = w.course;
            }
          }
          if (w.order == 3) {
            if (w.course != "无" && w.course != "临时预约") {
              t1.value.order3 = w.course.name;
            } else {
              t1.value.order3 = w.course;
            }
          }
          if (w.order == 4) {
            if (w.course != "无" && w.course != "临时预约") {
              t1.value.order4 = w.course.name;
            } else {
              t1.value.order4 = w.course;
            }
          }
          if (w.order == 5) {
            if (w.course != "无" && w.course != "临时预约") {
              t1.value.order5 = w.course.name;
            } else {
              t1.value.order5 = w.course;
            }
            console.log(t1.value);
            tableData.push(t1.value);
            console.log("day1", tableData);
          }
        }
        if (w.day == 2) {
          if (w.order == 1) {
            if (w.course != "无" && w.course != "临时预约") {
              t2.value.order1 = w.course.name;
            } else {
              t2.value.order1 = w.course;
            }
          }
          if (w.order == 2) {
            if (w.course != "无" && w.course != "临时预约") {
              t2.value.order2 = w.course.name;
            } else {
              t2.value.order2 = w.course;
            }
          }
          if (w.order == 3) {
            if (w.course != "无" && w.course != "临时预约") {
              t2.value.order3 = w.course.name;
            } else {
              t2.value.order3 = w.course;
            }
          }
          if (w.order == 4) {
            if (w.course != "无" && w.course != "临时预约") {
              t2.value.order4 = w.course.name;
            } else {
              t2.value.order4 = w.course;
            }
          }
          if (w.order == 5) {
            if (w.course != "无" && w.course != "临时预约") {
              t2.value.order5 = w.course.name;
            } else {
              t2.value.order5 = w.course;
            }
            console.log(t2.value);
            tableData.push(t2.value);
            console.log("day2", tableData);
          }
        }
        if (w.day == 3) {
          if (w.order == 1) {
            if (w.course != "无" && w.course != "临时预约") {
              t3.value.order1 = w.course.name;
            } else {
              t3.value.order1 = w.course;
            }
          }
          if (w.order == 2) {
            if (w.course != "无" && w.course != "临时预约") {
              t3.value.order2 = w.course.name;
            } else {
              t3.value.order2 = w.course;
            }
          }
          if (w.order == 3) {
            if (w.course != "无" && w.course != "临时预约") {
              t3.value.order3 = w.course.name;
            } else {
              t3.value.order3 = w.course;
            }
          }
          if (w.order == 4) {
            if (w.course != "无" && w.course != "临时预约") {
              t3.value.order4 = w.course.name;
            } else {
              t3.value.order4 = w.course;
            }
          }
          if (w.order == 5) {
            if (w.course != "无" && w.course != "临时预约") {
              t3.value.order5 = w.course.name;
            } else {
              t3.value.order5 = w.course;
            }
            console.log(t3.value);
            tableData.push(t3.value);
            console.log("day3", tableData);
          }
        }
        if (w.day == 4) {
          if (w.order == 1) {
            if (w.course != "无" && w.course != "临时预约") {
              t4.value.order1 = w.course.name;
            } else {
              t4.value.order1 = w.course;
            }
          }
          if (w.order == 2) {
            if (w.course != "无" && w.course != "临时预约") {
              t4.value.order2 = w.course.name;
            } else {
              t4.value.order2 = w.course;
            }
          }
          if (w.order == 3) {
            if (w.course != "无" && w.course != "临时预约") {
              t4.value.order3 = w.course.name;
            } else {
              t4.value.order3 = w.course;
            }
          }
          if (w.order == 4) {
            if (w.course != "无" && w.course != "临时预约") {
              t4.value.order4 = w.course.name;
            } else {
              t4.value.order4 = w.course;
            }
          }
          if (w.order == 5) {
            if (w.course != "无" && w.course != "临时预约") {
              t4.value.order5 = w.course.name;
            } else {
              t4.value.order5 = w.course;
            }
            console.log(t4.value);
            tableData.push(t4.value);
            console.log("day4", tableData);
          }
        }
        if (w.day == 5) {
          if (w.order == 1) {
            if (w.course != "无" && w.course != "临时预约") {
              t5.value.order1 = w.course.name;
            } else {
              t5.value.order1 = w.course;
            }
          }
          if (w.order == 2) {
            if (w.course != "无" && w.course != "临时预约") {
              t5.value.order2 = w.course.name;
            } else {
              t5.value.order2 = w.course;
            }
          }
          if (w.order == 3) {
            if (w.course != "无" && w.course != "临时预约") {
              t5.value.order3 = w.course.name;
            } else {
              t5.value.order3 = w.course;
            }
          }
          if (w.order == 4) {
            if (w.course != "无" && w.course != "临时预约") {
              t5.value.order4 = w.course.name;
            } else {
              t5.value.order4 = w.course;
            }
          }
          if (w.order == 5) {
            if (w.course != "无" && w.course != "临时预约") {
              t5.value.order5 = w.course.name;
            } else {
              t5.value.order5 = w.course;
            }
            console.log(t5.value);
            tableData.push(t5.value);
            console.log("day5", tableData);
          }
        }
        if (w.day == 6) {
          if (w.order == 1) {
            if (w.course != "无" && w.course != "临时预约") {
              t6.value.order1 = w.course.name;
            } else {
              t6.value.order1 = w.course;
            }
          }
          if (w.order == 2) {
            if (w.course != "无" && w.course != "临时预约") {
              t6.value.order2 = w.course.name;
            } else {
              t6.value.order2 = w.course;
            }
          }
          if (w.order == 3) {
            if (w.course != "无" && w.course != "临时预约") {
              t6.value.order3 = w.course.name;
            } else {
              t6.value.order3 = w.course;
            }
          }
          if (w.order == 4) {
            if (w.course != "无" && w.course != "临时预约") {
              t6.value.order4 = w.course.name;
            } else {
              t6.value.order4 = w.course;
            }
          }
          if (w.order == 5) {
            if (w.course != "无" && w.course != "临时预约") {
              t6.value.order5 = w.course.name;
            } else {
              t6.value.order5 = w.course;
            }
            console.log(t6.value);
            tableData.push(t6.value);
            console.log("day6", tableData);
          }
        }
        if (w.day == 7) {
          if (w.order == 1) {
            if (w.course != "无" && w.course != "临时预约") {
              t7.value.order1 = w.course.name;
            } else {
              t7.value.order1 = w.course;
            }
          }
          if (w.order == 2) {
            if (w.course != "无" && w.course != "临时预约") {
              t7.value.order2 = w.course.name;
            } else {
              t7.value.order2 = w.course;
            }
          }
          if (w.order == 3) {
            if (w.course != "无" && w.course != "临时预约") {
              t7.value.order3 = w.course.name;
            } else {
              t7.value.order3 = w.course;
            }
          }
          if (w.order == 4) {
            if (w.course != "无" && w.course != "临时预约") {
              t7.value.order4 = w.course.name;
            } else {
              t7.value.order4 = w.course;
            }
          }
          if (w.order == 5) {
            if (w.course != "无" && w.course != "临时预约") {
              t7.value.order5 = w.course.name;
            } else {
              t7.value.order5 = w.course;
            }
            console.log(t7.value);
            tableData.push(t7.value);
            console.log("day7", tableData);
          }
        }
      }
    });

    return {
      tableData3,
      tableData1,
      tableData,
      week
    };
  }
});
</script>
<style scoped>
.scheMain {
  display: flex;
}
.order {
  width: 180px;
}
.class {
  flex: 1;
}
</style>
