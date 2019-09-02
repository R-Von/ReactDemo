import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM , GET_LIST } from './actionTypes'
const defaultSate = {
    inputValue:'',
    list:[]
}

export default (state=defaultSate,action)=>{
    let newState = JSON.parse(JSON.stringify(state))
    if(action.type===CHANGE_INPUT){
        newState.inputValue = action.value
        console.log(newState)
        return newState
    }
    if(action.type===ADD_ITEM){
        let data = {
            name:newState.inputValue,
            stargazers_count:11
        }
        newState.list = [...newState.list,data]
        newState.inputValue = ""
        return newState
    }
    if(action.type===DELETE_ITEM){
        let index = action.value
        newState.list.splice(index,1)
        return newState
    }
    if(action.type===GET_LIST){
        console.log(action.data)
        newState.list = action.data
        return newState
    }
    return state
}