<template>
    <div class="rvwrap">
    <div class="elmenu">
    <el-menu :default-active="this.$route.path" router mode="horizontal" class="elmenuinner">
      <el-menu-item
        v-for="(item, i) in labnavList"
        :key="i"
        :index="item.name"
      >
        {{ item.navItem }}
      </el-menu-item>
    </el-menu>
    </div>
    <div class="rv2">
       <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, ref } from "vue";
import { State } from "@/store";
export default defineComponent({
  methods: {
    handleSelect(key: any, keyPath: any) {
      console.log(key, keyPath);
    },
  },
  setup() {
    const store = useStore<State>();
    const labnavList = [
      { name: "/labManage/add", navItem: "添加实验室" },
      { name: "/labManage", navItem: "修改实验室" },
      { name: "/labManage/delete", navItem: "删除实验室" },
    ];
    return {
      labnavList,
    };
  },
});
</script>

<style>
  @import "../css/teacherManage.css";
</style>