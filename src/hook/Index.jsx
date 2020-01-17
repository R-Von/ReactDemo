import React , { useEffect } from 'react'

function Index(){
  useEffect(()=>{
    console.log('useEffect=> willMount Index Page')
    return ()=>{
      console.log('useEffect=> willUnmount Index Page')
    }
  })
  return (<h2>Index</h2>)
}

export default Index