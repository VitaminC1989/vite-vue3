<template>
  <div class="sticky">
    <div class="content">
      <section>
        <h2 class="title-1">
          <strong class="headline-gradient">The magic of iPad.</strong>
          <span>In the palm of your hand.</span>
        </h2>
      </section>
      <section>
        <h2 class="title-2">
          Where <strong>big ideas</strong>
          <br />
          come to life.
        </h2>
      </section>
      <section>
        <h2 class="title-3">
          With <strong>power</strong>
          <br />
          that packs a punch.
        </h2>
      </section>
    </div>

    <div class="media-wrapper">
      <canvas width="1600" height="1176" id="canvas"></canvas>
    </div>
  </div>

  <div class="timeline-wrapper">
    <div class="timeline timeline-1"></div>
    <div class="timeline timeline-2"></div>
    <div class="timeline timeline-3"></div>
    <!-- <div class="timeline timeline-1 bg-indigo-100"></div>
    <div class="timeline timeline-2 bg-indigo-200"></div>
    <div class="timeline timeline-3 bg-indigo-300"></div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

/**
 * 模仿苹果官网的视差效果
 * 原文章: https://juejin.cn/post/7061976278932389918
 */

export default defineComponent({
  data() {
    return { imgUrl: [] };
  },
  watch: {
    imgUrl(val) {
      console.log("imgUrl", val);
    },
  },
  mounted() {
    const url = "/apple/apple.webm";

    const metaData = {
      url,
      //   frameCount: 230,
      frameCount: 460,
    };

    // this.cacheFrame(metaData).then((frameStore) => {
    //   console.log("缓存视频成功");
    //   const ctx = document.getElementById("canvas").getContext("2d");
    //   const scrollDom = document.documentElement;
    //   console.log("scrollDom", scrollDom);

    //   // 渲染首帧
    //   this.renderFrame(ctx, frameStore[0]);

    //   // 监听滚动。渲染其他帧
    //   window.addEventListener("scroll", () => {
    //     console.log("scroll", scrollDom.scrollTop);
    //     const scrolled =
    //       scrollDom.scrollTop /
    //       (scrollDom.scrollHeight - scrollDom.clientHeight);

    //     frameStore = frameStore.filter((item) => item !== false);

    //     const frameIndex = parseInt(frameStore.length * scrolled) + 1;

    //     if (frameStore[frameIndex] !== undefined) {
    //       this.renderFrame(ctx, frameStore[frameIndex]);
    //     }

    //     document.querySelector(
    //       ".content"
    //     ).style.transform = `matrix(1, 0, 0, 1, 0, -${scrollDom.scrollTop})`;
    //   });
    // });
  },

  methods: {
    // 创建视频DOM对象
    createVideo(url: string): HTMLVideoElement {
      const video = document.createElement("video");

      video.src = url;
      video.muted = true;
      video.playbackRate = 1;
      video.currentTime = 0;
      // 允许 CORS 的资源 可在 <canvas> 元素中被重用，而不会被污染。(被污染的canvas 无法导出图片)
      video.setAttribute("crossOrigin", "Anonymous");
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("type", "video/webm");
      video.setAttribute("preload", "none");
      video.classList.add("video");
      video.style.display = "none";
      window.document.body.appendChild(video);

      return video;
    },
    // 截取视频帧
    createFrame(
      video: HTMLVideoElement,
      videoWidth: string | number,
      videoHeight: string | number
    ): HTMLCanvasElement {
      //   const canvas = window.OffscreenCanvas
      //     ? new OffscreenCanvas(videoWidth, videoHeight)
      //     : document.createElement("canvas");
      const canvas: HTMLCanvasElement = document.createElement("canvas");
      const context = canvas.getContext("2d") as CanvasRenderingContext2D;

      const w = Number(videoWidth);
      const h = Number(videoHeight);

      canvas.width = w;
      canvas.height = h;
      context.drawImage(video, 0, 0, w, h);

      return canvas;
    },
    // 渲染图片到canvas
    renderFrame(ctx: CanvasRenderingContext2D, frame: HTMLCanvasElement) {
      ctx.clearRect(0, 0, 1600, 1176);
      ctx.drawImage(frame, 0, 0);
    },
    // 缓存视频帧
    cacheFrame(videoMetaData: {
      url: string;
      frameCount: number;
    }): Promise<(HTMLCanvasElement | false)[]> {
      return new Promise((resolve, reject) => {
        const { url, frameCount } = videoMetaData;
        const video = this.createVideo(url);
        const frameStore: (HTMLCanvasElement | false)[] = new Array(
          frameCount
        ).fill(false);
        let videoWidth: number = 0;
        let videoHeight: number = 0;
        let setIn: number = 0;
        let frameNumber: number = 0;

        video.play();

        video.addEventListener("loadedmetadata", () => {
          console.log("loadedmetadata", video.videoWidth, video.videoHeight);
          videoWidth = video.videoWidth;
          videoHeight = video.videoHeight;
        });

        video.addEventListener("ended", () => {
          resolve(frameStore);
        });

        video.addEventListener("waiting", () => {
          clearInterval(setIn);
        });

        video.addEventListener("error", () => {
          reject([]);
        });

        video.addEventListener("canplaythrough", () => {
          clearInterval(setIn);
          const fps: number = 30;

          setIn = setInterval(() => {
            if (frameNumber >= frameCount) clearInterval(setIn);

            frameStore[frameNumber] = this.createFrame(
              video,
              videoWidth,
              videoHeight
            );
            frameNumber++;
          }, fps);
        });
      });
    },
  },
});
</script>

<style></style>

<style lang="scss" scoped>
.sticky {
  top: 0px;
  height: 100vh;
  overflow: hidden;
  background: f5f5f7;
  .content {
    position: absolute;
    width: 100%;
    z-index: -1;
    top: 110vh;

    strong {
      color: transparent;
      box-decoration-break: clone;
    }

    h2 {
      font-family: Arial, sans-serif;
      color: #1d1d1f;
      font-size: 48px;
      line-height: 1.0834933333;
      font-weight: 600;
    }

    section {
      margin-left: auto;
      margin-right: auto;
      width: 980px;
      text-align: left;

      &:nth-child(1) {
        height: 100vh;
      }
      &:nth-child(2) {
        height: 90vh;
      }
      &:nth-child(3) {
        height: 270vh;
      }

      .title-1 {
        width: 470px;

        span {
          display: inline-block;
          width: 320px;
        }

        strong {
          background: linear-gradient(
            90deg,
            rgb(112, 43, 252) 0%,
            rgb(242, 59, 255) 100%,
            rgb(255, 112, 118) 200%,
            rgb(29, 29, 31) 300%
          );
          background-clip: text;
        }
      }
      .title-2 {
        height: 90vh;

        strong {
          background-image: linear-gradient(
            90deg,
            rgb(237, 24, 106) 0%,
            rgb(255, 103, 0) 100%,
            rgb(255, 203, 57) 200%,
            rgb(29, 29, 31) 300%
          );
          background-clip: text;
        }
      }
      .title-3 {
        height: 270vh;

        strong {
          background-image: linear-gradient(
            90deg,
            rgb(0, 158, 119) 0%,
            rgb(0, 153, 192) 100%,
            rgb(2, 127, 255) 200%,
            rgb(88, 86, 214) 300%,
            rgb(29, 29, 31) 400%
          );
          background-clip: text;
        }
      }
    }
  }

  .media-wrapper {
    display: flex;
    height: 100vh;
    width: 50%;
    left: 50%;
    align-items: flex-end;
    justify-content: center;

    canvas {
      display: block;
      position: absolute;
      width: auto;
      height: auto;
      bottom: 0;
      left: 50%;
      transform: translateX(-23%);
      max-height: 100vh;
    }
  }
}

.timeline-wrapper {
  position: relative;
  margin-top: -100vh;
  z-index: 1;

  .timeline-1 {
    height: 100vh;
  }
  .timeline-2 {
    height: 90vh;
  }
  .timeline-3 {
    height: 270vh;
  }
}
</style>
