<script setup>
import demo1 from "./demo1.vue";
import demo2 from "./demo2.vue";
import demo3 from "./demo3.vue";
</script>

<script>
// import icon_wechat from  './assets/wechat.svg'
// import demo1 from "./demo1.vue";
// import demo2 from "./demo2.vue";
// import demo3 from "./demo3.vue";

export default {
  data() {
    return {
      greeting: "Hello World!",
    };
  },
  create() {
    console.log("create", this.data, this.$data);
  },
};
</script>

<template>
  <!-- <demo1 /> -->
  <!-- <demo2 /> -->
  <demo3 />
</template>

<style scoped></style>
