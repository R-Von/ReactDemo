import React,{Component,Fragment} from 'react'
import GoodsItem from './goodsItem'
import Boss from './boss'
import axios from 'axios'


console.log(axios)

class Goods extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:"",
            list:['goods1','goods2']
        }
    }
    render(){
        return(
            <Fragment>
                <div>
                    <input 
                        type="text" 
                        placeholder="write sth" 
                        value={this.state.inputValue}
                        onChange={this.inputChange}
                    />  
                    <button onClick={this.addItem}>add</button>      
                </div> 
                <Boss/>
                <ul>
                   {
                       this.state.list.map((item,index)=>{
                           return(
                               <GoodsItem 
                               key={index}
                               content={item}
                               index={index}
                               deleteItem={this.deleteItem}
                               />
                           )
                       })
                   }
                </ul>
            </Fragment>
        )
    }
    inputChange=(e)=>{
        this.setState({
            inputValue:e.target.value
        })
    }
    addItem=()=>{
        if(this.state.inputValue===''){
            return
        }
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    deleteItem=(index)=>{
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
    componentDidMount(){
        //在componentDidMount中进行ajax请求、
        axios.get('https://api.github.com/search/repositories?q=language:javascript+language:css+language:html+stars:%3E=10000&sort=stars&order=desc&per_page=10')
        .then(res=>{
            console.log(res)
            this.setState({
                list:res.data.items
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
    // componentWillMount(){
    //     console.log('1-----组件即将挂载')
    // }
    // componentDidMount(){
    //     console.log('2-----组件完成挂载')
    // }
    // shouldComponentUpdate(){
    //     console.log('3-----组件发生改变前执行')
    //     return true
    // }
    // componentWillUpdate(){
    //     console.log('4----组件更新前执行')
    // }
    // componentDidUpdate(){
    //     console.log('5----组件更新之后执行')
    // }
}

export default Goods


// 生命周期

// 1.Initilization   初始化
// 2.Mounting   挂载阶段
    //1.componentWillMount
    //2.render
    //3.componentDIdMount   
// 3.Updation   更新阶段

// 4.Unmounting 销毁阶段
