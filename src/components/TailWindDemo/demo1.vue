<script setup></script>

<template>
  <div
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mb-4"
  >
    <div class="flex-shrink-0">
      <img class="h-12 w-12" src="./assets/wechat.svg" alt="ChitChat Logo" />
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-gray-500">You have a new message!</p>
    </div>
  </div>

  <!-- Extracting classes using @apply -->
  <button class="btn btn-green">Button</button>

  <div class="container mt-20 mx-auto">容器</div>

  <div
    class="w-1/2 mx-auto p-4 bg-indigo-100 text-white bg-stripes bg-stripes-white"
  >
    <div class="py-5 block bg-indigo-500 mb-2 font-sans text-xs">
      这是一段话 <br />
      The quick brown fox jumps over the lazy dog.
    </div>
    <div class="py-5 block bg-indigo-500 mb-2 font-serif text-base">
      这是一段话 <br />
      The quick brown fox jumps over the lazy dog.
    </div>
    <div class="py-5 block bg-indigo-500 mb-2 font-mono text-5xl">
      这是一段话 <br />
      The quick brown fox jumps over the lazy dog.
    </div>
  </div>

  <div class="rounded-t-xl p-10 overflow-hidden">
    <div
      class="w-full h-48 bg-fixed bg-center bg-contain bg-no-repeat overflow-y-scroll"
      style="
        background-image: url('https://www.tailwindcss.cn/img/placeholder-light-blue.svg');
      "
    >
      <div class="h-64"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md;
}

.btn-green {
  @apply text-white bg-green-500 hover:bg-green-700;
}
</style>
