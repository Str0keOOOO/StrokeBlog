---
title: AutoHotkey-自动化脚本神器
date: 2024-03-03
icon: circle-info
order: 1
---

官网：[AutoHotkey](https://www.autohotkey.com/)

## 下载方式

官网直接安装即可

本人两个版本都下载

## 两个版本的区别

v1和v2的区别主要在语法，v1是命令行语法，v2是表达式语法。

而v2就是彻底抛弃命令行语法，把主要命令改造成表达式语法，从而成长为完全的高级语言，这是必需的一步，好比猴子变成人就得丢掉尾巴一样。

## 使用方法

这里使用的是2.0版本

vscode下载名称: AutoHotkey Plus插件

VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-autohotkey-plus

可以创建一个.ahk后缀的脚本用vscode打开

官方文档：[Quick Reference | AutoHotkey v2](https://www.autohotkey.com/docs/v2/)

[AutoHotkey 初学者向导 | AutoHotkey v1 (wyagd001.github.io)](https://wyagd001.github.io/zh-cn/docs/Tutorial.htm#s71)

[初学者向导 | AutoHotkey v2 (wyagd001.github.io)](https://wyagd001.github.io/v2/docs/Tutorial.htm#s71)

### 1. 热键标记

- `#`：win键
- `!`：alt
- `^`：ctrl
- `+`：shift

### 2. 连接

符号 `::` 意味着每次按下前面的热键时，随后的命令将会被执行。这里用来连接热键标记和 Run 命令。

### 3. Run命令

Run 命令：用来启动一个程序、文档、URL 网址或者快捷方式。如：

```AutoHotkey
Run Notepad
Run C:\My Documents\Address List.doc
Run www.yahoo.com
Run mailto:someone@somedomain.com
```

把上面 3 部分组合起来即可实现自定义快捷键。

比如通过按 ctrl + q 启动位于 D:\software\QQ.exe 的 QQ 程序，按 alt + b 打开百度，可以这样写：

```text
^q::Run D:\software\QQ.exe
!b::Run www.baidu.com
```

这样，大家就可以自定义自己的程序启动热键了。

## 开机自启

把需要开机启动的脚本，放入 “启动” 文件夹即可。

```**目录：**{C:\Users\username\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup}```

