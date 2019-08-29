import React, {Component} from 'react'
// import React, {Component} from 'react'
// 这里用的是ES6的语法——解构赋值  相当于
// import React from 'react'
// const Component = React.Component


class App extends Component{
    render(){
        return(
            <ul className="list">
                <li>Hello {false?'world':'everyone'}</li>
              
            </ul>
        )
    }
}

// JSX 就是js和xml结合的一种格式  利用html语法来创建虚拟DOM 
// 当遇到< ，jsx就当做HTML 来解析 遇到 { 当做js来解析

export default App