import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM , GET_LIST } from './actionTypes'
import axios from 'axios'



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

export const getList = ()=>{
    return (dispatch)=>{
        axios.get('https://api.github.com/search/repositories?q=language:javascript+language:css+language:html+stars:%3E=10000&sort=stars&order=desc&per_page=10')
        .then(res=>{
            console.log(res)
            const data = res.data.items
            console.log(data)
            const action = getListAction(res.data.items)
            dispatch(action)
        })
        .catch(err=>{
            console.log(err)
        })
    }
}