<script setup></script>

<template>
  <div class="w-full h-screen py-10 flex flex-col items-center justify-center">
    <h1 class="w-full mb-6 font-serif">
      <span>练习CSS属性：</span>
      <span> grid </span>
      <span> shadow </span>
    </h1>
    <div
      class="w-1/2 rounded-xl bg-gradient-to-r from-indigo-50 to-indigo-100 p-5"
    >
      <div class="grid grid-cols-4 gap-2">
        <div class="item">shadow</div>
        <div class="item">shadow</div>
        <div class="item">shadow</div>
        <div class="item">shadow</div>
        <div class="item">shadow</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  @apply w-32 h-32 flex items-center justify-center text-base shadow bg-white bg-opacity-80 shadow-xl;
}
</style>
