<template>
  <div class="p-10 mx-auto">
    <BaseBtn @click="handleClick">Click</BaseBtn>
  </div>

  <div class="box p-10 mx-auto">
    <div id="dom1" class="p-2">point1</div>
    <div id="dom2" class="p-2">point2</div>
    <div id="dom3" class="p-2">point3</div>
    <div id="dom4" class="p-2">point4</div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from "vue";
import BaseBtn from "@coms/BaseBtn/index.vue";
import LeaderLine from "@/utils/leader-line@1.0.7js";

export default defineComponent({
  components: {
    BaseBtn,
  },
  props: {},
  setup(props) {
    const counter = ref(0);

    const timing = () => {
      counter.value++;
    };

    onMounted(() => {
      console.log("mounted");
    });

    return {
      counter,
      timing,
    };
  },
  data(): {
    [x: string]: any;
    lines?: any[];
  } {
    return {
      imgUrl: [],
      lines: [],
    };
  },
  watch: {
    imgUrl(val) {
      console.log("imgUrl", val);
    },
  },
  created() {},
  mounted() {
    const dom1 = document.querySelector("#dom1");
    const dom2 = document.querySelector("#dom2");
    const dom3 = document.querySelector("#dom3");
    const dom4 = document.querySelector("#dom4");

    const l1 = new LeaderLine(dom1, dom2, { color: "gold", size: 6 });
    const l2 = new LeaderLine(
      dom2,
      LeaderLine.pointAnchor(dom3, {
        x: 60,
        y: 20,
      }),
      { endLabel: LeaderLine.pathLabel("This is additional label") }
    );

    const l3 = new LeaderLine(dom3, dom4, {
      startPlugColor: "#1a6be0",
      endPlugColor: "#1efdaa",
      gradient: true,
      dash: {
        animation: true,
      },
    });

    this.lines.push(l1, l2, l3);
  },
  methods: {
    createArray<T>(length: number, value: T): Array<T> {
      const arr = new Array<T>(length).fill(value);
      return arr;
    },
    handleClick(): void {
      this.lines.forEach((l) => {
        console.log("line", l);
        l.size++;
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.box {
  position: relative;

  #dom1 {
    position: absolute;

    // margin-right: 100px;
  }
  #dom2 {
    position: absolute;
    top: 600px;
    left: 300px;
  }
  #dom3 {
    position: absolute;
    top: 200px;
    left: 600px;
  }
  #dom4 {
    position: absolute;
    top: -100px;
    left: 1200px;
  }
}
</style>
