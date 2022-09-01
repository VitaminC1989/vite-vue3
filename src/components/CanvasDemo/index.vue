<template>
  <div class="flex align-center">
    <canvas class="mx-auto" id="canvas" width="512" height="512"></canvas>
  </div>
</template>

<script>
import { defineComponent } from "vue";
// import * as d3 from "d3";
import * as d3 from "d3";
import hierarchyData from "./hierarchyData.json";

export default defineComponent({
  name: "CanvasDemo",
  data() {
    return {
      canvas: null,
    };
  },
  computed: {
    cw() {
      return this.canvas.width;
    },
    ch() {
      return this.canvas.height;
    },
  },
  create() {},
  mounted() {
    this.drawing();
  },
  methods: {
    drawing: async () => {
      console.log(hierarchyData, d3);
      const regions = d3
        .hierarchy(hierarchyData)
        .sum((d) => 1)
        .sort((a, b) => b.value - a.value);

      console.log("regions", regions);

      // const canvas = document.querySelector("canvas");
      // this.canvas = canvas;

      // const { width, height } = canvas;
      // const ctx = canvas.getContext("2d");

      // console.log("canvas", width, height);
      // const rectSize = [100, 100];
      // ctx.fillStyle = "#5c7cfa";
      // ctx.save();

      // ctx.translate(-0.5 * rectSize[0], -0.5 * rectSize[1]);
      // ctx.beginPath();
      // ctx.rect(0.5 * width, 0.5 * height, ...rectSize);
      // ctx.restore();

      // ctx.fill();
    },
  },
});
</script>

<style scoped>
canvas {
  border: 1px solid #339af0;
}
</style>
