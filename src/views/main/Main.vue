<template>
  <el-container class="main-container">
    <!-- 头部 -->
    <el-header>
      <div>
        <img src="" alt="" />
        <span><h1>Lab Reservtion</h1></span>
      </div>
      <el-button type="info" @click="logout">logout</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <sidebar />
      <!-- 右侧内容主题去 -->
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
  <!-- <div>
    <h1>Main</h1>
    <sidebar />
    <hr />
    <router-view />
  </div> -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
import sidebar from "@/views/main/Sidebar.vue";

export default defineComponent({
  components: { sidebar },
  setup() {
    const logout = () => window.sessionStorage.clear();
    return {
      logout
    };
  }
});
</script>
<style scoped>
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #eaedf1;
  front-size: 20px;
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #ffffff;
}
.main-container {
  height: 100vh;
}
</style>
