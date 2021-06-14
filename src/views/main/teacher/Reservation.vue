<template>
  <div>
    <el-menu
      :default-active="this.$route.path"
      router
      mode="horizontal"
      class="elmenuinner"
    >
      <el-menu-item v-for="(item, i) in labnavList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
    </el-menu>
  </div>
  <br />
  <div><router-view /></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const labnavList = [
      { name: "/labManage/add", navItem: "添加实验室" },
      { name: "/labManage", navItem: "修改实验室" },
      { name: "/labManage/delete", navItem: "删除实验室" }
    ];
    return {
      labnavList
    };
  }
});
</script>
