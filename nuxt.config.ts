// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    buildAssetsDir: "/static/",
  },

  // Github pages required
  ssr: false,

  plugins: [
    "@/plugins/element-plus",
    {
      src: "@/plugins/three.js",
      ssr: false,
    },
  ],

  css: ["element-plus/dist/index.css"],

  devtools: {
    enabled: true,
  },

  modules: [
    '@nuxt/devtools',
  ],
});
