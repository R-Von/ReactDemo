import React,{Component,Fragment} from 'react'
// const Fragment = React.Fragment



class Xiaojiejie extends Component{
    //响应式设计和数据的绑定  
    //js的构造函数 由其他任何函数执行
    //定义数据  数据定义在组件中构造函数里的constructor
    constructor(props){
        super(props)  //调用父类的构造函数 固定写法
        this.state = {
            inputValue:"", //input中的值
            list:['godds1','goods2']   //服务列表
        }
    }
    render(){
        return (
        //    <div>
        <Fragment>
            <div>
                <input placeholder="请输入" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                <button onClick={this.addItem.bind(this)}>Add</button>    
            </div> 
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return <li key={index} onClick={this.deleteItem.bind(this,index)}>{item}</li>
                    })
                }
            </ul>
        </Fragment>
        //    </div>
        )
    }
    inputChange(e){
        // this.state.inputValue = e.target.value
        // 这是错误写法  this的指向不对 需要inputChange方法重新绑定一下this的指向
        // React中改变值需要使用this.setState方法
        this.setState({
            inputValue:e.target.value
        })
    }
    addItem(){
        // const list = this.state.list
        // const item = this.state.inputValue
        // list.push(item)
        // this.state.inputValue = ''
        // this.setState({
        //     list:list
        // })
        if(this.state.inputValue == ''){
            return
        }   
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        })
        this.state.inputValue = ''
        // ...是ES6的新语法 叫扩展运算符 
        // 意思就是把list数组进行了分解 形成了新的数组 然后在进行组合

    }
    deleteItem(index){
        console.log(index)
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}

export default Xiaojiejie