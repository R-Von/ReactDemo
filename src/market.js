import React,{Component, Fragment} from 'react'
import MarketItem from './MarketItem'

class Market extends Component{
    constructor(prop){
        super(prop)
        this.state = {
            inputValue:"",
            list:['goods-1','goods-2']
        }
    }
    render(){
        console.log('Render函数')
        return(
            <Fragment>
                <div>
                    <input 
                        placeholder="add something" 
                        value={this.state.inputValue} 
                        onChange={this.inputChange.bind(this)}
                        ref={(input)=>{this.input=input}}
                    />
                    <button onClick={this.addList.bind(this)}>add</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <MarketItem 
                                key = {index+item} 
                                index = {index} 
                                content = {item} 
                                deleteItem = {this.deleteItem.bind(this)}
                                amount = {index+1}
                                />
                            )
                        })
                    }  
                </ul>
            </Fragment>
        )
    }
    inputChange(e){
        // console.log(this.input)  拿到input的真实dom
        this.setState({
            inputValue:this.input.value
        })
        // 使用ref来解决语义化 代替e.target.value 
        // ref获取真实的dom节点
        // 如果ref来进行表示 需要在jsx中进行绑定 
    }
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    deleteItem(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
  
    componentWillMount(){
        console.log('componentWillMount  ')
    }
    componentDidMount(){
        console.log('componentDidMount  ')
    }

    shouldComponentUpdate(){

        console.log('shouldComponentUpdate————组件发生改变前执行')
        // 必须返回一个布尔值  true 组件更新  false 组件不更新
        return true
    }
    componentWillUpdate(){
        
    }
}

export default Market