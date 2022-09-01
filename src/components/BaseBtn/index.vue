<template>
  <div class="inline-block btn btn-green">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseBtn",
});
</script>

<style scoped>
.btn {
  user-select: none;
  @apply py-2 px-4 font-semibold rounded-lg shadow-md cursor-pointer;
}
.btn-green {
  @apply text-white bg-green-500 hover:bg-green-700;
}

.btn-blue {
  @apply text-white bg-indigo-400 hover:bg-indigo-500;
}

.btn-pink {
  @apply text-white bg-pink-300 hover:bg-pink-400;
}
</style>
