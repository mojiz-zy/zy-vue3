<template>
  <div>
    <el-aside width="200px">
      <el-col :span="20">
        <!-- 侧边栏 -->
        <el-menu
          background-color=" #333744"
          text-color="#fff"
          active-text-color="#409eff"
          class="e-menu"
        >
          <!-- 一级菜单 -->
          <el-submenu
            v-for="(menu1, m1index) in menuList"
            :key="`m1-${m1index}`"
          >
            <!-- 一级菜单模板去 -->
            <template #title>
              <!-- 图标 -->
              <i class="el-icon-s-custom"></i>
              <!-- 文本 -->
              <span>{{ menu1.title }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="`m2-${m2index}`"
              v-for="(menu2, m2index) in menu1.children"
              :key="`m2-${m2index}`"
              ><template #title>
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span
                  ><router-link :to="menu2?.path">{{
                    menu2.title
                  }}</router-link></span
                >
              </template></el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-col>
    </el-aside>
  </div>

  <!-- <template v-for="(menu1, m1index) in menuList" :key="`m1-${m1index}`">
      <h3>{{ menu1.title }}</h3>
      <template v-if="menu1?.children.length > 0">
        <ul>
          <li v-for="(menu2, m2index) in menu1.children" :key="`m2-${m2index}`">
            <router-link :to="menu2?.path">{{ menu2.title }}</router-link>
          </li>
        </ul>
      </template>
    </template> -->
</template>
<script lang="ts">
import { State } from "@/store";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const state: State = useStore().state;
    const menuList = state.menuList;

    return {
      menuList
    };
  }
});
</script>
<style scoped>
.el-aside {
  background-color: #333744;
  height: 100vh;
}
.e-menu {
  border-right: none;
}
</style>
