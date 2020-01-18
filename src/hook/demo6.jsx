import React , { useState , useEffect , createContext , useContext } from 'react'

const CountContext = createContext(1)

function Example4(){
  const [ count , setCount ] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>Click Me</button>

      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>

    </div>
  )
}


function Counter(){
  const count = useContext(CountContext)
  return (<h2>{count}</h2>)
}

export default Example4