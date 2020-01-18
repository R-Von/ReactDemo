import React , { Component } from 'react'

class Examples extends Component{
  constructor(props){
    super(props)
    this.state = { count:0 }
  }

  componentDidMount(){
    console.log(`ComponentDidMount=> You clicked ${this.state.count} times`)
  }

  componentDidUpdate(){
    console.log(`ComponentDidUpdate=> You clicked ${this.state.count} times`)
  }

  render(){
    const { state } = this
    return (
      <div>
        <p>You clicked {state.count} times </p>
        <button onClick={this.addCount}>Click me</button>
      </div>
    )
  }

  addCount = ()=>{
    this.setState({count:this.state.count+1})
  }
}


export default Examples