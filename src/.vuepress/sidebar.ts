import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/":[
    {
      text: "主页",
      icon: "bug",
      prefix: "",
      children: "structure",
    }
  ],
  "/posts/code/": [
    {
      text: "代码笔记",
      icon: "laptop-code",
      prefix: "",
      children: "structure",
    },    
  ],
  "/posts/books/": [
    {
      text: "图书收集",
      icon: "book",
      prefix: "",
      children: "structure",
    },
  ],
});

