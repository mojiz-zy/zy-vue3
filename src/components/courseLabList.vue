<template>
  <el-table :data="tableData" style="width: 100%" max-height="250">
    <el-table-column
      prop="number"
      label="CourseID"
      width="120"
    ></el-table-column>
    <el-table-column
      prop="computerNumber"
      label="ComputerNumber"
      width="200"
    ></el-table-column>
    <el-table-column fixed="right" label="Reserve" width="120">
      <template #default="scope">
        <el-button @click="CourseReserve(scope)" type="text" size="small">
          Reserve
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { State } from "@/store";
import { useStore } from "vuex";
import router from "@/router";
import { toRaw } from "@vue/reactivity"; //将Proxy代理对象转换为源对象
import { useRoute } from "vue-router";
import { Lab } from "@/datasource/Type";
export default defineComponent({
  setup() {
    const store = useStore<State>();
    const route = useRoute();
    const studentNum = route.query.studentNum;
    const courseId = route.query.courseId;
    const courseLabList: Lab[] = [];
    store.state.labList?.forEach((l: any) => {
      if (l.computerNumber >= Number(studentNum)) {
        courseLabList.push(l);
      }
    });
    const tableData = computed(() => {
      return courseLabList;
    });
    const CourseReserve = (scope: any) => {
      const row = toRaw(scope.row); //将Proxy代理对象转换为源对象
      router.push({
        path: "/teacher/courseManage/courseLabReserve",
        query: { labNum: row.number, courseId: courseId }
      });
    };
    return {
      CourseReserve,
      tableData
    };
  }
});
</script>
