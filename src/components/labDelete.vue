<template>
      <el-table
    :data="tableData"
    style="width: 100%"
    max-height="250">

    <el-table-column
      prop="number"
      label="实验室编号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="computerNumber"
      label="实验室机器数量"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template #default="scope">
        <el-button
          @click="EditRow(scope.row.number)"
          type="text"
          size="small">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent } from 'vue'
import {State} from '@/store'
import * as types from "@/store/VuexTypes"
export default defineComponent({
    setup() {
        const store =useStore<State>();
        const tableData = store.state.labList;
        const EditRow = (number : any) => {
            store.dispatch(types.DELETE_LAB,number)
        }
        return{
            EditRow,
            tableData,
        }
    },
})
</script>
