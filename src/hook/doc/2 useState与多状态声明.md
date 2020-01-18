### useState的介绍
useState是react自带的一个hook函数 它的作用是用来声明状态变量

#### 声明
上述代码中
```
const [ count , setCount ] = useState(0)
<!--ES6的数组结构-->
<!--相当于-->
let _useState = userState(0)
let count = _useState[0]
let setCount = _useState[1]
```
```useState```这个函数接收的参数是状态的初始值(initial state) 返回一个数组 数组的第0位是当前的状态值 第1位是可以改变状态值的方法函数 所以上述代码的意思就是声明了一个状态变量为count 并把它的初始值设为0 同时提供了一个可以改变count的状态值得方法函数 

##### 多状态声明
```
import React , { useState } from 'react'

function Example2(){
  const [ age , setAge ] = useState(18)
  const [ sex , setSex ] = useState('Male')
  const [ work , setWork ] = useState('FE')

  return (
    <div>
      <p>XiaoMing ages {age} years old</p>
      <p>Gender {sex}</p>
      <p>Work {work}</p>
    </div>
  )
}

export default Example2
```
React是根据useState出现的顺序来确定useState找到对应的state
React Hooks不能出现在条件判断语句中 因为它必须要有完全一样的渲染顺序

