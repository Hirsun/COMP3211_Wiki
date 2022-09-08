import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "COMP4342 G15",
  description: "移动计算小组项目 Wiki",

  base: "/COMP4342_Wiki/",

  theme,
});
