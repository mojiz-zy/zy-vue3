<template>
  <div class="lablistwrap">
    <el-table :data="tableData" style="width: 100%" max-height="250">
      <el-table-column
        prop="number"
        label="LabID"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="computerNumber"
        label="ComputerNumber"
        width="120"
      ></el-table-column>
      <el-table-column label="Reserve" width="120">
        <el-button @click="OneReserve(scope)" type="text" size="small">
          Reserve
        </el-button>
      </el-table-column>
      <el-table-column label="CheckSchedule" width="120">
        <el-button
          type="text"
          @click="
            open();
            querySchedule(scope);
            active = true;
            labNum = scope.row.number;
          "
        >
          Check
        </el-button>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, defineAsyncComponent } from "vue";
import { State } from "@/store";
import { useStore } from "vuex";
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
              path: "/teacher/labReserve/showSchedule",
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
        path: "/teacher/labReserve/oneReserve",
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
