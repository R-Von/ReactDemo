import React, { Component } from 'react'
import TodoUI from './todoUI'
import store from './store'
// import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './store/actionTypes'
import { changeInputAction , addItemAction , deleteItemAction , getListAction } from './store/actionCreator'
import axios from 'axios'

class TodoList extends Component{
    constructor(props){
        super(props)
        // state = {}
        // console.log(store.getState())
        // this.setState(store.getState())
        this.state = store.getState()

        store.subscribe (this.storeChange)
    }
    storeChange = ()=>{
        this.setState(store.getState())
    }
    render(){
        return (
            <div>
                <TodoUI 
                    inputValue = {this.state.inputValue}
                    list = {this.state.list}
                    changeInputValue = {this.changeInputValue}
                    addItem = {this.addItem}
                    deleteItem = {this.deleteItem}
                />
            </div>
        )
    }
    changeInputValue = (e)=>{
        // const action = {
        //     type:CHANGE_INPUT,
        //     value:e.target.value
        // }
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    addItem(){
        // const action = {
        //     type:ADD_ITEM
        // }
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        // const action = {
        //     type:DELETE_ITEM,
        //     value:index
        // }
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    componentDidMount(){
        axios.get('https://api.github.com/search/repositories?q=language:javascript+language:css+language:html+stars:%3E=10000&sort=stars&order=desc&per_page=10')
        .then(res=>{
            console.log(res)
            const action = getListAction(res.data.items)
            store.dispatch(action)
        })
        .catch(err=>{
            console.log(err)
        })

    }
}


export default TodoList