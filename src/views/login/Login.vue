<template>
  <div class="login-body">
    <div class="login-container">
      <p>teacher: 1001; director: 1002; admin: 2002</p>
      <div class="head">
        <h1 class="title">Login</h1>
        <!-- <div class="tips">实验室预约系统</div> -->
      </div>
      <el-form
        label-position="top"
        class="login-form"
        :model="loginForm"
        ref="loginForm"
      >
        <el-form-item label="账户" prop="user.number">
          <el-input autocomplete="off" type="text" v-model="user.number" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="user.password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="login"
            >立即登录</el-button
          >
        </el-form-item>
      </el-form>
      <!--<label>
     
      <br />
      <input type="text" v-model="user.password" />
      <br />
      <button @click="login">login</button>
    </label>-->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { LOGIN } from "@/store/VuexTypes";

export default defineComponent({
  setup() {
    const user = ref({ number: "", password: "" });
    const store = useStore();
    const loginForm = ref(null);
    const login = () => {
      store.dispatch(LOGIN, user.value);
    };
    return {
      user,
      login,
      loginForm
    };
  }
});
</script>
<style scoped>
.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  /* background-image: linear-gradient(25deg, #077f7c, #3aa693, #5ecfaa, #7ffac2); */
}
.login-container {
  width: 420px;
  height: 500px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 20px 0;
}
/* .head img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  } */
.head .title {
  font-size: 28px;
  color: #1baeae;
  font-weight: bold;
}
/* .head .tips {
  font-size: 12px;
  color: #999;
} */
.login-form {
  width: 70%;
  margin: 0 auto;
}
.el-form--label-top .el-form-item__label {
  padding: 0;
}
.login-form .el-form-item {
  margin-bottom: 12px;
}
</style>
