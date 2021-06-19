<template>
  <el-table :data="tableData" style="width: 100%" max-height="250">
    <el-table-column
      prop="courseId"
      label="CourseID"
      width="120"
    ></el-table-column>
    <el-table-column
      prop="name"
      label="CourseName"
      width="200"
    ></el-table-column>
    <el-table-column
      prop="studentNum"
      label="StumentNumber"
      width="200"
    ></el-table-column>
    <el-table-column prop="hours" label="Perid" width="120"></el-table-column>
    <el-table-column fixed="right" label="Edit" width="120">
      <template #default="scope">
        <el-button
          @click="EditRow(scope.row.courseId)"
          type="text"
          size="small"
        >
          Edit
        </el-button>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="Reserve" width="120">
      <template #default="scope">
        <el-button @click="CourseReserve(scope)" type="text" size="small">
          CourseReserve
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { State } from "@/store";
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
        path: "/teacher/courseManage/edit",
        query: { courseId: i }
      });
    };
    const CourseReserve = (i: any) => {
      const row = toRaw(i.row); //将Proxy代理对象转换为源对象
      router.push({
        path: "/teacher/courseManage/courseLabList",
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
