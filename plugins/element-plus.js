import * as ElementPlus from "element-plus/dist/index.full.mjs";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus, {
    locale: zhCn,
  });
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(key, component);
  }
});
