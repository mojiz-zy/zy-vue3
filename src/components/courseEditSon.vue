<template>
  <el-form :label-position="labelPosition" label-width="80px" :model="teacher">
    <el-form-item label="课程编号">
      <el-input v-model="course.courseId"></el-input>
    </el-form-item>
    <br />
    <el-form-item label="课程名称">
      <el-input v-model="course.name"></el-input>
    </el-form-item>
    <label for="">提交修改</label>
    <el-button
      @click="update"
      type="success"
      icon="el-icon-check"
      circle
    ></el-button>
    <label for="">返回实验室列表</label>
    <el-button
      @click="back"
      type="danger"
      icon="el-icon-check"
      circle
    ></el-button>
  </el-form>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent, ref } from "vue";
import { State } from "@/store";
import * as types from "@/store/VuexTypes";
import { Lab } from "@/datasource/Type";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  methods: {
    handleSelect(key: any, keyPath: any) {
      console.log(key, keyPath);
    },
  },
  setup() {
    const store = useStore<State>();
    const courses = computed(() => {
      return store.state.courses;
    });
    const course = ref({
      courseId: "",
      name: "",
      studentNum: "",
      hours: "",
    });
    const route = useRoute();
    const router = useRouter();
    const password = ref("");
    const courseId = route.query.courseId;
    courses.value?.forEach((c) => {
      if (c.courseId == courseId) {
        course.value.courseId = c.courseId;
        course.value.name = c.name;
        course.value.studentNum = c.studentNum;
        course.value.hours = c.hours;
      }
    });
    const update = () => {
      store.dispatch(types.UPDATE_COURSE, course.value);
    };
    const back = () => {
      router.push("/courseManage");
    };
    return {
      back,
      update,
      course,
      password,
    };
  },
});
</script>
