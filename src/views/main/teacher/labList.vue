<template>
  <div class="lablistwrap">
    <el-table :data="tableData" style="width: 100%" max-height="250">
      <el-table-column
        prop="number"
        label="实验室编号"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="computerNumber"
        label="机器数量"
        width="120"
      ></el-table-column>
      <el-table-column label="操作" width="120">
        <template #default="scope">
          <el-button @click="OneReserve(scope)" type="text" size="small">
            单节预约
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="课程表查询" width="120">
        <template #default="scope">
          <el-button
            type="text"
            @click="
              open();
              querySchedule(scope);
              active = true;
              labNum = scope.row.number;
            "
          >
            查询
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, defineAsyncComponent } from "vue";
import { State } from "@/store";
import { useStore } from "vuex";
import * as types from "@/store/VuexTypes";
import router from "@/router";
import { toRaw } from "@vue/reactivity"; //将Proxy代理对象转换为源对象
import { ElMessage } from "element-plus";
import { ElMessageBox } from "element-plus";
export default defineComponent({
  setup() {
    const active = ref(false);
    const store = useStore<State>();
    const week = ref();
    const options = [];
    const labNum = ref();
    const weekInput = ref();

    const open = () => {
      ElMessageBox.prompt(
        "请输入要查询第几周的课表",
        "提示：只需要输入数字即可",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          inputErrorMessage: "格式不正确"
        }
      )
        .then(({ value }: any) => {
          if (value >= 1 && value <= 18) {
            router.push({
              path: "/labReserve/showSchedule",
              query: { labNum: labNum.value, weekInput: value }
            });
          } else {
            ElMessage({
              type: "warning",
              message: "请输入1-18中的任意数字"
            });
          }
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "取消输入"
          });
        });
    };

    const onEmitSubmit = (week: string) => {
      active.value = false;
      weekInput.value = week;
      console.log(weekInput.value);
    };
    for (let i = 1; i < 19; i++) {
      const option = { week: "", label: "" };
      option.week = String(i);
      option.label = `第${i}周`;
      options.push(option);
    } //周数
    const tableData = computed(() => {
      return store.state.labList;
    });
    const OneReserve = (scope: any) => {
      const row = toRaw(scope.row); //将Proxy代理对象转换为源对象
      router.push({
        path: "/labReserve/oneReserve",
        query: { labNum: row.number }
      });
    };
    const querySchedule = (scope: any) => {
      const row = toRaw(scope.row); //将Proxy代理对象转换为源对象
      // router.push({
      //   path: "/labReserve/querySchedule",
      //   query: { labNum: row.number },
      // });
    };
    return {
      labNum,
      open,
      querySchedule,
      onEmitSubmit,
      week,
      options,
      OneReserve,
      active,
      tableData
    };
  }
});
</script>
<style scoped>
.el-table::before {
  z-index: 0;
}
</style>
