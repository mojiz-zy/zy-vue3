<template>
  <el-select v-model="beginweek" filterable placeholder="Please">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.beginweek"
    ></el-option>
  </el-select>
  <span>TO</span>
  <el-select v-model="endweek" filterable placeholder="Please">
    <el-option
      v-for="item in options4"
      :key="item.value"
      :label="item.label"
      :value="item.endweek"
    ></el-option>
  </el-select>
  <el-select v-model="day" filterable placeholder="Please">
    <el-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.day"
    ></el-option>
  </el-select>
  <el-select v-model="order" filterable placeholder="Please ">
    <el-option
      v-for="item in options3"
      :key="item.value"
      :label="item.label"
      :value="item.order"
    ></el-option>
  </el-select>
  <br />
  <el-button-group>
    <el-button type="primary" icon="el-icon-search" @click="Query()">
      Chek State
    </el-button>
    <!-- <el-tag type="danger" v-if="state">YES</el-tag>
    <el-tag type="info" v-else>NO</el-tag> -->
    <el-button type="primary" plain @click="ApplyOrder()">Reserve</el-button>
  </el-button-group>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { State } from "@/store";
import { useRoute } from "vue-router"; //必须引入useRoute才能使用route
import { ElMessage } from "element-plus";
import { toRaw } from "@vue/reactivity";
import { SUBMIT_LABLIST } from "@/store/VuexTypes";
export default defineComponent({
  setup() {
    const route = useRoute();
    const store = useStore<State>();
    const labNum = route.query.labNum; //传递过来的实验室编号
    const courseId = route.query.courseId; //课程编号
    const beginweek = ref();
    const endweek = ref();
    const day = ref();
    const order = ref();
    const time = { beginweek: "", endweek: "", day: "", order: "" };
    const options = [];
    const options4 = [];
    const options2 = [];
    const options3 = [];
    const state = ref(true);
    const value1 = ref(false);
    const queryState = function() {
      store.state.labList!.forEach(lab => {
        if (labNum == lab.number) {
          lab.schedule.forEach((s: any) => {
            for (
              let i = parseInt(beginweek.value);
              i < parseInt(endweek.value) + 1;
              i++
            ) {
              if (s.week == i && s.day == day.value && s.order == order.value) {
                if (s.state) {
                  //若可预约则不动
                  state.value = s.state;
                } else {
                  alert(`第${s.week}周 星期${s.day} 第${s.order}节已经被预约`);
                  state.value = false; //若某周的该天该节已经被预约则不可预约
                }
              }
              if (state.value == false) {
                break;
              } //只要有一节被占用就显示不可预约
            }
          });
        }
      });
    };
    const Query = () => {
      if (beginweek.value && endweek.value && day.value && order.value) {
        time.beginweek = beginweek.value;
        time.endweek = endweek.value;
        time.day = day.value;
        time.order = order.value;
        queryState();
      } else {
        alert("Please input details");
      }
    };
    const ApplyOrder = () => {
      store.state.labList!.forEach(lab => {
        if (labNum == lab.number) {
          console.log("ApplyOrder", lab.schedule);
          lab.schedule.forEach((s: any) => {
            for (
              let i = parseInt(beginweek.value);
              i < parseInt(endweek.value) + 1;
              i++
            ) {
              if (s.week == i && s.day == day.value && s.order == order.value) {
                state.value = false;
                toRaw(s).state = false;
                store.state.courses?.forEach(c => {
                  if (
                    courseId == c.courseId &&
                    c.teacherNum == sessionStorage.getItem("teacherNum")
                  ) {
                    toRaw(s).course = toRaw(c);
                  }
                }); //循环课程列表找到根据该教师的编号和课程编号找到对应课程
              }
            }
          });
        }
      });
      console.log("提交预约申请后", store.state.labList);
      store.dispatch(SUBMIT_LABLIST, store.state.labList);
      ElMessage.success({
        message: "Success！",
        type: "success"
      });
    };
    for (let i = 1; i < 19; i++) {
      const option = { beginweek: "", label: "" };
      option.beginweek = String(i);
      option.label = `第${i}周`;
      options.push(option);
    } //起始周数
    for (let i = 1; i < 19; i++) {
      const option = { endweek: "", label: "" };
      option.endweek = String(i);
      option.label = `第${i}周`;
      options4.push(option);
    } //结束周数
    for (let i = 1; i < 8; i++) {
      const option = { day: "", label: "" };
      option.day = String(i);
      option.label = `星期${i}`;
      options2.push(option);
    } //星期
    for (let i = 1; i < 6; i++) {
      const option = { order: "", label: "" };
      option.order = String(i);
      option.label = `第${i}节`;
      options3.push(option);
    } //节数
    return {
      beginweek,
      endweek,
      day,
      order,
      options,
      options2,
      options3,
      options4,
      state,
      //   ApplyOrder,
      Query,
      ApplyOrder
    };
  }
});
</script>
