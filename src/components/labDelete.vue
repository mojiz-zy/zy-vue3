<template>
  <el-table :data="tableData" style="width: 100%" max-height="250">
    <el-table-column prop="number" label="LabID" width="120"> </el-table-column>
    <el-table-column prop="computerNumber" label="ComputerNmber" width="200">
    </el-table-column>
    <el-table-column fixed="right" label="Delete" width="120">
      <template #default="scope">
        <el-button @click="EditRow(scope.row.number)" type="text" size="small">
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { defineComponent } from "vue";
import { State } from "@/store";
import * as types from "@/store/VuexTypes";
export default defineComponent({
  setup() {
    const store = useStore<State>();
    const tableData = store.state.labList;
    const EditRow = (number: any) => {
      store.dispatch(types.DELETE_LAB, number);
    };
    return {
      EditRow,
      tableData
    };
  }
});
</script>
