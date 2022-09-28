import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { viteMockServe } from "vite-plugin-mock";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3005,
    proxy: {
      "/api": {
        target: "http://www.baidu.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve("./src"),
      comps: resolve("./src/components"),
    },
  },
  plugins: [vue(), vueJsx(), viteMockServe({})],
});
