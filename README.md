# 个人博客快速搭建 [StrokeBlog](mystroke.cn)

## 插件

所需插件 [vuepress-theme-hope]([主题介绍 | vuepress-theme-hope (vuejs.press)](https://theme-hope.vuejs.press/zh/guide/get-started/intro.html))

参考插件 [vuepress]([VuePress (vuejs.org)](https://vuepress.vuejs.org/zh/))

## 运行方法

运行项目：

```powershell
pnpm add -D katex
pnpm add -D mermaid

pnpm install
pnpm docs:dev
```

生成静态网页：

```powershell
pnpm docs:build
```

![intro](./src/.vuepress/public/assets/images/posts/intro.png)
