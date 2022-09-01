<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import TailWindDemo from "./components/TailWindDemo/index.vue";
import Demo from "./components/Demo/index.vue";
import AppleRollingParallax from "./components/AppleRollingParallax/index.vue";
import Map from "./components/Map/index.vue";
import CanvasDemo from "./components/CanvasDemo/index.vue";
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <!-- <TailWindDemo /> -->

  <!-- 苹果官网滚动视差 -->
  <!-- <AppleRollingParallax /> -->

  <Demo />
  <!-- <Map /> -->
  <!-- <CanvasDemo /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
