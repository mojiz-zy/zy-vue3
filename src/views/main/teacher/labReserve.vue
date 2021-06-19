<template>
  <div class="rvwrap">
    <div class="elmenu">
      <el-menu router mode="horizontal" class="elmenuinner">
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
import { defineComponent, ref } from "vue";
export default defineComponent({
  methods: {
    handleSelect(key: any, keyPath: any) {
      console.log(key, keyPath);
    }
  },
  setup() {
    const labnavList = [
      { name: "/teacher/labReserve", navItem: "Laboratory" },
      { name: "/teacher/labReserve/add", navItem: "Add Laboratory" },
      { name: "/teacher/labReserve/delete", navItem: "Delete Laboratory" }
    ];
    return {
      labnavList
    };
  }
});
</script>
