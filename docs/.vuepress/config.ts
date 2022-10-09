import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "COMP3211 G11",
  description: "SE GRP-Project Wiki",

  base: "/COMP3211_Wiki/",

  theme,
});
