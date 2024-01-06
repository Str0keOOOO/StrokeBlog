import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "文章",
      icon: "laptop-code",
      prefix: "",
      link: "",
      children: "structure",
    },
  ],
});

