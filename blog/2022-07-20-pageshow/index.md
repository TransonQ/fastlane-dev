---
slug: pageshow
title: 判断页面是否为后退进入
authors: [tristy]
tags: [DOM, JavaScript]
---

### 背景

contact us 、support 等提交表单的页面，在操作表单的过程中去向其他页面，然后通过后退返回到这些页面来时，原来的数据依然会存在，这时可能会导致一些交互上的错误或者各种各样的问题，需要在后退是删除这些数据

### 方案

通过 event.persisted 和 window.performance 判断页面是否为后退进入

- window.performance.navigation.type == 2 通过后退返回该页面
- event.persisted 从缓存获取数据时为true，否则为false

```jsx
window.addEventListener('pageshow', event => {
  if (event.persisted || window.performance && window.performance.navigation.type == 2) {
		// dosomething...
	}
})
```

### Performance

[Performance - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance)