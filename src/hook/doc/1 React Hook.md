常规写法
```
import React , { Component } from 'react'

class Example extends Component {
  constructor(props){
    super(props)
    this.state = { count:0 }
  }
  render(){
    const { state } = this
    return (
      <div>
        <p>This is Normal</p>
        <p>U clicked {state.count} times</p>
        <button onClick={this.addCount}>Click me</button>
      </div>
    )
  }
  addCount = ()=>{
    this.setState({
      count:this.state.count+1
    })
  }

}


export default Example
```

hook写法
```
import React , { useState } from 'react'
function Example(){
  const [ count , setCount ] = useState(0)
  return (
    <div>
      <p>This is hook</p>
      <p>U clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
    </div>
  )
}

export default Example
```

Hooks本质上就是一类特殊的函数 他们可以为你的函数型的组件注入一些特殊的功能

hooks的目的是让你不再写```class``` 让```function```一统江湖