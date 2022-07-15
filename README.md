# 语法

[MDX](https://mdxjs.com/)

## 侧边栏文件夹配置

`_category_.json`

```json
{
  "label": "Tutorial - Basics", // 页签标题
  "position": 2, // 页签位置
  "link": {
    "type": "generated-index", // 类型
    "description": "描述" // 自动聚合成一个导航页面
  }
}
```

`xxx.md`

```md
---
sidebar_position: 6  // 当前页签下的侧边栏位置
---
```

## tip 相关

```
:::note

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。

:::

:::tip

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。

:::

:::info

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。

:::

:::caution

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。

:::

:::danger

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)

:::
```
