import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
      "@coms": "/src/components",
    },
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {},
    },
  },
});
