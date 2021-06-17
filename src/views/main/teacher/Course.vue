<template>
  <div>
    <div>
      <el-menu
        :default-active="this.$route.path"
        router
        mode="horizontal"
        class="elmenuinner"
      >
        <el-menu-item
          v-for="(item, i) in labnavList"
          :key="i"
          :index="item.name"
        >
          {{ item.navItem }}
        </el-menu-item>
      </el-menu>
    </div>
    <div>
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
    }
  },
  setup() {
    // const store = useStore<State>();
    const labnavList = [
      { name: "/courseManage", navItem: "课程列表" },
      { name: "/courseManage/add", navItem: "添加课程" },
      { name: "/courseManage/delete", navItem: "删除课程" }
    ];
    return {
      labnavList
    };
  }
});
</script>
