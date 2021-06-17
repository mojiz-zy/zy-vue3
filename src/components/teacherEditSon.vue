<template>
  <el-form :label-position="labelPosition" label-width="80px" :model="teacher">
    <el-form-item label="教师姓名">
      <el-input v-model="teacher.name"></el-input>
    </el-form-item>
    <br />
    <el-form-item label="教师职称">
      <el-input v-model="teacher.title"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="password"></el-input>
    </el-form-item>
    <label for="">提交修改</label>
    <el-button
      @click="update"
      type="success"
      icon="el-icon-check"
      circle
    ></el-button>
    <label for="">返回教师列表</label>
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
import { Teacher } from "@/datasource/Type";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  methods: {
    handleSelect(key: any, keyPath: any) {
      console.log(key, keyPath);
    },
  },
  setup() {
    const store = useStore<State>();
    const teaList = computed(() => {
      return store.state.teacherList;
    });
    const teacher = ref({} as Teacher);
    const route = useRoute();
    const router = useRouter();
    const password = ref("");
    const teacherNum = route.query.teacherNum;
    teaList.value?.forEach((t) => {
      if (t.number == teacherNum) {
        teacher.value.number = t.number;
        teacher.value.name = t.name;
        teacher.value.title = t.title;
      }
    });
    const update = () => {
      store.dispatch(types.UPDATE_TEACHER, teacher.value);
      store.dispatch(types.UPDATE_TEACHER_PASSWORD, password.value);
    };
    const back = () =>{
      router.push("/teacherManage")
    }
    return {
      back,
      update,
      teacher,
      password,
    };
  },
});
</script>
