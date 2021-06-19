<template>
  <el-form label-position="top" label-width="80px">
    <el-form-item label="CourseID">
      <el-input v-model="course.courseId"></el-input>
    </el-form-item>
    <br />
    <el-form-item label="CourseName">
      <el-input v-model="course.name"></el-input>
    </el-form-item>
    <el-form-item label="StumentNumber">
      <el-input v-model="course.studentNum"></el-input>
    </el-form-item>
    <el-form-item label="Perid">
      <el-input v-model="course.hours"></el-input>
    </el-form-item>
    <el-button @click="submit" type="primary" icon="el-icon-upload2"
      >Submit</el-button
    >
  </el-form>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, ref } from "vue";
import { State } from "@/store";
import * as types from "@/store/VuexTypes";
import { Course } from "@/datasource/Type";
export default defineComponent({
  methods: {
    handleSelect(key: any, keyPath: any) {
      console.log(key, keyPath);
    }
  },
  setup() {
    const store = useStore<State>();
    console.log("labAdd", store.state.labList);

    const course = ref({
      courseId: "",
      name: "",
      studentNum: "",
      hours: ""
    });
    const submit = () => {
      const flag = true;
      if (
        flag == true &&
        course.value.name &&
        course.value.courseId &&
        course.value.studentNum &&
        course.value.hours
      ) {
        store.commit(types.ADD_COURSE, {
          courseId: course.value.courseId,
          name: course.value.name,
          studentNum: course.value.studentNum,
          hours: course.value.hours,
          teacherNum: sessionStorage.getItem("teacherNum")
        } as Course);
      }
      store.dispatch(types.ADD_COURSE, course.value); //发送新添加的lab信息
    };
    return {
      course,
      submit
    };
  }
});
</script>
