// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

export default defineNuxtConfig({
  app: {
    buildAssetsDir: "/static/",
  },

  // Github pages required
  ssr: false,

  plugins: [
    "@/plugins/element-plus.js",
    {
      src: "@/plugins/three.js",
      ssr: false,
    },
  ],

  devtools: {
    enabled: false,
  },

  modules: ["@nuxt/devtools"],

  vite: {
    build: {
      sourcemap: false,
      minify: "terser",
      chunkSizeWarningLimit: 1500,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      // rollupOptions: {
      //   output: {
      //     manualChunks(id) {
      //       if (id.includes("node_modules")) {
      //         return id
      //           .toString()
      //           .split("node_modules/")[1]
      //           .split("/")[0]
      //           .toString();
      //       }
      //     },
      //     // chunkFileNames: (chunkInfo) => {
      //     //   // 替换name里面的_为空
      //     //   chunkInfo.name = chunkInfo.name.replace(/_/g, "");
      //     //   return `[name].[hash].js`;
      //     // },
      //   },
      // },
    },
    plugins: [
      AutoImport({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver(),
        ],
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            enabledCollections: ["ep"],
          }),
        ],
      }),
      Icons({
        autoInstall: true,
      }),
    ],
  },
});
