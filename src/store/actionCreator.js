import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM , GET_LIST } from './actionTypes'

export const changeInputAction = (value)=>{
    const action = {
        type:CHANGE_INPUT,
        value:value
    }
    return action
}


export const addItemAction = ()=>{
    const action = {
        type:ADD_ITEM
    }
    return action
} 

export const deleteItemAction = (index)=>{
    const action = {
        type:DELETE_ITEM,
        value:index
    }
    return action
}

export const getListAction = (data)=>{
    const action = {
        type:GET_LIST,
        data
    }
    return action
} 