<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <el-row :span="24" justify="center" direction="vertical" :size="300">
    <img alt="Vue logo" src="./assets/logo.png"/>
  </el-row>
  <el-row :span="24" justify="center" direction="vertical" :size="300" style="height: 150px">
<!--    <img alt="Vue logo" src="./assets/logo.png"/>-->

  </el-row>
  <h4>智能搜索：</h4>
  <el-row :span="24" justify="center" direction="vertical" :size="30">
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite"/>
  </el-row>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
