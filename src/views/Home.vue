<script lang="ts" setup>
import { ref } from "vue";

const account = ref("");
const passwd = ref("");
</script>

<template>
  <h1 class="title">CarryPigeon</h1>
  <div class="avatar">
    <el-avater size="80px" fit="fill">
      <img src="https://avatars.githubusercontent.com/u/133548383?s=80&v=4" />
    </el-avater>
  </div>
  <div class="login">
    <el-input v-model="account" style="width: 240px " placeholder="Please input account" />
    <el-input v-model="passwd" style="width:240px" type="password" placeholder="Please input password" />
    <el-button type="primary" style="width: 240px">Login</el-button>
  </div>
</template>


<style>
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

<style scoped>
.bg-color{
  background-color: black;
}

.avatar {
  display: grid;
  text-align: center;
  justify-content: center;
}
</style>