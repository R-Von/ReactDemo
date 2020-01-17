import React , { useEffect } from 'react'

function List(){
  useEffect(()=>{
    console.log('useEffect=> WillMount List')
  })
  return (<h2>List</h2>)
}

export default List