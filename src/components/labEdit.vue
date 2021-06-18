<template>
  <el-table :data="tableData" style="width: 100%" max-height="250">
    <el-table-column
      prop="number"
      label="实验室编号"
      width="120"
    ></el-table-column>
    <el-table-column
      prop="computerNumber"
      label="实验室机器数量"
      width="120"
    ></el-table-column>
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="scope">
        <el-button @click="EditRow(scope.row.number)" type="text" size="small">
          编辑
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
        path: "/labManage/edit",
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
