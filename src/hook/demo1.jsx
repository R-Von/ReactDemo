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