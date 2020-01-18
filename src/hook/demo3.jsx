import React , { useState } from 'react'

function Example2(){
  const [ age , setAge ] = useState(18)
  const [ sex , setSex ] = useState('Male')
  const [ work , setWork ] = useState('FE')

  return (
    <div>
      <p>XiaoMing ages {age} years old</p>
      <p>Gender {sex}</p>
      <p>Work {work}</p>
    </div>
  )
}

export default Example2