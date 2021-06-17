<template>
  <el-table :data="tableData" style="width: 100%" max-height="250">
    <el-table-column
      prop="courseId"
      label="课程编号"
      width="120"
    ></el-table-column>
    <el-table-column prop="name" label="课程名称" width="120"></el-table-column>
    <el-table-column
      prop="studentNum"
      label="学生数量"
      width="120"
    ></el-table-column>
    <el-table-column prop="hours" label="学时数" width="120"></el-table-column>
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="scope">
        <el-button
          @click="EditRow(scope.row.courseId)"
          type="text"
          size="small"
        >
          编辑
        </el-button>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="scope">
        <el-button @click="CourseReserve(scope)" type="text" size="small">
          课程实验室预约
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { State } from "@/store";
import * as types from "Vuex";
import { useRouter } from "vue-router";
import { toRaw } from "@vue/reactivity";
export default defineComponent({
  setup() {
    const store = useStore<State>();
    const router = useRouter();
    const tableData = computed(() => {
      return store.state.courses;
    });
    console.log(tableData);

    const EditRow = (i: any) => {
      console.log(i);
      router.push({
        path: "/course/edit",
        query: { courseId: i }
      });
    };
    const CourseReserve = (i: any) => {
      const row = toRaw(i.row); //将Proxy代理对象转换为源对象
      router.push({
        path: "/course/courseLabList",
        query: { studentNum: row.studentNum, courseId: row.courseId }
      });
    };
    return {
      EditRow,
      CourseReserve,
      tableData
    };
  }
});
</script>
