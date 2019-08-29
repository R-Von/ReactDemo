import React, {Component,Fragment} from 'react'

class GoodsItem extends Component{
    render(){
        return(
            <li onClick={this.handleClick}>
                {this.props.content}
            </li>
        )
    }
    handleClick=()=>{
        console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
    componentWillReceiveProps(){
        console.log('子组件——componentWillReceiveProps')
        //子组件的声明周期中 
        //子组件接收到父组件传递过来的参数 父组件render函数重新被执行 这个生命周期就会被执行
        // 这个组件第一次存在于Dom中 函数是不会执行的
        // 已经存在于Dom中 函数才会被执行
    }
    componentWillUnmount(){
        console.log('child -- componentWillUnmount')
    }
}


export default GoodsItem