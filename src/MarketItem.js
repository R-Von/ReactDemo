import React, {Component} from 'react'
import PropTypes from 'prop-types'



// 新建一个子组件  对外提供使用 
class MarketItem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }           
    render(){
        // console.log('render函数')
        return (
            <li onClick={this.handleClick}>
               {this.props.content} --{this.props.money}/{this.props.amount} 个
            </li>
        )
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
    // 生命周期
    // 1.initialization 初始化阶段
    // 2.Mounting 挂载阶段  
        // a. componentWillMount 组件即将被挂载到页面时执行
    // componentWillMount(){
    //     console.log('compoentWillMount  组件即将挂载到页面时执行')
    // }
        // b. render 页面state或props发生变化时执行
        // c. componentDidMount 组件挂载完成时被执行
    // componentDidMount(){
    //     console.log('componentDidMount  组件挂载完成时执行')
    // }  
    // shouldComponentUpdate(){
    //     console.log(this.props.index)
    //     // console.log()
    //     return false
    // }  
}

MarketItem.propTypes = {
    content:PropTypes.string, //string 类型
    deleteItem:PropTypes.func,//function 类型
    index:PropTypes.number,   //number类型
    amount:PropTypes.number.isRequired //必须类型 
}

// 使用默认值
MarketItem.defaultProps = {
    money:10
}

export default MarketItem

// 父组件传参给子组件 靠属性的形式去做传递

// 子组件调用父组件的方法 只需在组件调用时 把方法也一并传给子组件即可
