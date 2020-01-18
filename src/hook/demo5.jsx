import React , { useState , useEffect } from 'react'

function HookExample(){
  const [ count , setCount ] = useState(0)
  // --关键代码-------start------
  useEffect(()=>{
    console.log(`useEffect => You clicked ${count} times`)
  }) 
  // --关键代码------end------
  return (
    <div>
      <p>React Hook Example</p>
      <p>You clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
    </div>
  )

}

export default HookExample