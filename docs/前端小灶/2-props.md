---
slug: props
---

## 上期回顾

从快速上手的章节我们大致了解了如下的知识点:

- 快速创建 react 项目的方式
- 创建组件并渲染
- 通过 CRA 创建的项目的代码结构
- JSX 写法的注意事项
- 在 JSX 中引入样式, 类名`className` 和行内样式`style={ {css 对象} }`
- 在 JSX 中渲染数据 `{ js 表达式 }`
- 条件渲染
- 渲染列表的思路
- JSX 中的事件写法 `小驼峰: onClick`
- 简单介绍了 react 中的状态 `useState`

## 先实现一个简单的点击计数

> 实现一个按钮并且实时显示数字长度
> - 使用`useState`定义一个状态`count`，初始值为 `1`;
> - 渲染一个 `button`标签，并且绑定点击事件，每次点击按钮，`count`值加 `1`。
> - 把 `count`的值渲染到页面上，文案满足以下条件。
> - 当 `count<=10` 文案为: 当前值在 1 - 10 以内；当`count>10` 文案为: 当前值大于 10。
> - ![](image/Pasted%20image%2020221211152214.png)
> - ![](image/Pasted%20image%2020221211152250.png)


## 组件的属性

```jsx
function App(){
	// 组件 App 返回一个 img 标签, img 接收的属性有: src, className, alt
	return <img src="..." className="avatar" alt="seo_name" />
}
```

在组件化的时候，我们需要接收来自上级组件传递的属性，封装成一个达到特定业务渲染的可复用组件。

首先一起看一下，组件如何接收传入的属性
```jsx title="组件接收属性的写法"
function App() {
 // 引入声明的组件 Profile
  return (
    <>
      <Profile name="法外狂徒张三" />
    </>
  )
}


export const Profile = (props) => {
  // 打印看看接收到的 props 是什么结构
  console.log('props: ', props); // props: {name: '法外狂徒张三'}
  return (
    <div>Profile</div>
  )
}
```

一般来说，项目中在接收属性传参的时候，会先解构 props 对象， 就像如下这样：
```jsx title="解构获取参数"
export const Profile = ({ name }) => {
  return <div>{name}</div>
}
```


## props 的默认值

在上面的例子中，如果在不给`Profile` 组件传入 `name` 属性的时候，props 接收不到任何东西，如果如需一个默认显示的值，可以给组件接收参数设定*默认值* 。

```jsx
export const Profile = ({ name = '张三丰' }) => {
// 给接收的参数设置了默认值, 就算不传参数, 仍然有默认显示 
  return <div>{name}</div>
}
```

## children 

除了直接属性传递，还可以使用类似于插槽的方式，将整个组件传递。
首先封装一个`Card`组件，作为外壳样式组件。再向内传入内容；如下：

```jsx title="App.js"
import { Card } from './Card'

function App() {
  return (
    <>
      <Card>123</Card>
    </>
  )
}

```

```jsx title="Card.jsx"
import './card.css'

export const Card = ({ children }) => {
  return <div className='card'>{children}</div>
}
```

样式我们使用类名的形式：
```css title="card.css"
.card {
  width: 300px;
  height: 300px;
  border: 1px solid black;
  border-radius: 50%;
  display: grid;
  place-items: center;
}
```

![](image/Pasted%20image%2020221211204847.png)

这样一个 `Card` 组件就封装好啦，这里就像是我们造了一个我们自定义的标签，不过在 react 里面被称为`组件( component )`

:::info props 不可变
- props 不可变
- 想要使渲染该 props 的更新视图，必须传递一个新的对象。
- 理解同`useState`创建的状态值，状态本身不可变，改变需要调用`setState`方法，而此种方法会传递一个崭新的地址，从而使得组件的视图更新。
- `props`只是在当次渲染的不可变快照，更新视图渲染后都会获得一个新的地址值。（了解）
- 用`children`传入参数/组件时，规则同组件 `return`的规则，有且只能传入一个 jsx，多个组件需要用`div`/`<></>`包裹。
:::

## 写一个具备增加和删除的 todo list

![](image/Pasted%20image%2020221211214758.png)