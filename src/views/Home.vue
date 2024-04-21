<script lang="ts" setup>
import { ref } from "vue";

const account = ref("");
const passwd = ref("");
</script>

<script lang="ts">
import { invoke } from "@tauri-apps/api/core";
import { getCurrent, LogicalSize } from "@tauri-apps/api/window";

export default {
  data() {
    return {
      loginButtonLoadingStatus: false,
      loginButtonText: "Login",
    }
  },
  methods: {
    async login() {
      this.loginButtonLoadingStatus = true;
      this.loginButtonText = "Loading";
      invoke('login').catch((error) => console.log(error));
      this.loginButtonText = "Success";
      await new Promise(resolve => setTimeout(resolve, 2000));
      //this.loginButtonText = "1";

      // reset app window
      // fuck you,tauri2
      // 以下代码应该是可以正常执行的但是由于tauri2在beta尝试破坏性操作
      // 即突然上多webview支持导致这些基础操作全部爆炸
      // 以下reset window代码会在发布release后重新加入
      let app_window = await getCurrent();
      //app_window.hide();
      app_window.setResizable(true);
      app_window.setSize(new LogicalSize(600, 800));
      app_window.setResizable(false);
      //app_window.show();

      // goto /chat
      this.$router.push({ path: '/Chat' });
    }
  }
}
</script>

<template>
  <h1 class="title">CarryPigeon</h1>
  <div class="avatar">
    <el-avater size="80px" fit="fill">
      <img src="https://avatars.githubusercontent.com/u/133548383?s=80&v=4" />
    </el-avater>
  </div>
  <div class="login">
    <div style="margin: 3px" />
    <el-input v-model="account" style="width: 240px" placeholder="Please input account" />
    <div style="margin: 5px" />
    <el-input v-model="passwd" style="width:240px" type="password" placeholder="Please input password" />
    <div style="margin: 5px" />
    <el-button type="primary" @click="login()" :loading="loginButtonLoadingStatus" style="width: 240px"> {{ loginButtonText }} </el-button>
  </div>
</template>


<style lang="scss">
body{
  background-color: black;
}
.title {
  -webkit-user-select: none;
  /* Safari+Chromium */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* IE+Edge */
  user-select: none;

  text-align: center;

  color: white;
}
.login{
  display: grid;
  text-align: center;
  justify-content: center;
}
</style>

<style lang="scss" scoped>
.avatar {
  display: grid;
  text-align: center;
  justify-content: center;
}
</style>