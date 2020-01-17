import React, { Component } from 'react'
// import React, {Component} from 'react'
// 这里用的是ES6的语法——解构赋值  相当于
// import React from 'react'
// const Component = React.Component
// import Examples from './hook/demo4.jsx'
import HookExample from './hook/demo5.jsx'
import { BrowserRouter as Router , Route , Link } from 'react-router-dom'
import Index from './hook/Index'
import List from './hook/List'
import Example4 from './hook/demo6'

class App extends Component {
  render() {
    return (
      <div>
        <Example4 />
        {/* <HookExample /> */}
        {/* <Router>
          <ul>
            <li>
              <Link to="/">Index</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
          </ul>
          <Route path="/" exact component={Index} />
          <Route path="/list" component={List} />
        </Router> */}
      </div>
    )
  }
}

// JSX 就是js和xml结合的一种格式  利用html语法来创建虚拟DOM 
// 当遇到< ，jsx就当做HTML 来解析 遇到 { 当做js来解析

export default App