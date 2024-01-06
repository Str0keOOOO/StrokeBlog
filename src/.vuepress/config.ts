import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Str0keOOOO",
  description: "Stroke的博客",

  theme,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
}
);
