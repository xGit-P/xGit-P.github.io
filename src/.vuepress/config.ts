import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "沛 县 水 利 机 械 化 施 工 有 限 公 司",
  //description: "Peixian Water Conservancy Mechanization Construction Co.,Ltd",

  theme,
});
