<script lang="ts" setup>
import { ref } from "vue";

const account = ref("");
const passwd = ref("");
</script>

<script lang="ts">
import { invoke } from "@tauri-apps/api/core";

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
    <el-button type="primary" @click="login()" :loading="loginButtonLoadingStatus" style="width: 240px"> {{
      loginButtonText }} </el-button>
  </div>
</template>


<style lang="scss">
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

body {
  background-color: black;
  margin: 0px;
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

.login {
  display: grid;
  text-align: center;
  justify-content: center;
}

.avatar {
  display: grid;
  text-align: center;
  justify-content: center;
}
</style>