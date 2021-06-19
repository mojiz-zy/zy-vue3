<template>
  <el-table :data="tableData" style="width: 100%" max-height="250">
    <el-table-column prop="number" label="LabID" width="120"></el-table-column>
    <el-table-column
      prop="computerNumber"
      label="ComputerNmber"
      width="120"
    ></el-table-column>
    <el-table-column fixed="right" label="Edit" width="120">
      <template #default="scope">
        <el-button @click="EditRow(scope.row.number)" type="text" size="small">
          Edit
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { State } from "@/store";
import * as types from "@/store/VuexTypes";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const store = useStore<State>();
    const router = useRouter();
    const tableData = computed(() => {
      return store.state.labList;
    });
    console.log(tableData);

    const EditRow = (i: any) => {
      console.log(i);
      router.push({
        path: "/teacher/labReserve/edit",
        query: { labNum: i }
      });
    };
    return {
      EditRow,
      tableData
    };
  }
});
</script>
