import React from 'react'
import { useState } from 'react'

import min from '../assets/images/min.jpg'
import plus from '../assets/images/plus.jpg'

const ButtonCount = () => {

  const [count, setCount] = useState(0);
  if (count === 0) {
    return <>
    <button style={{border: 'none', background: 'none'}}><img src={min} alt="" /></button>
    <h3>{count}</h3>
    <button onClick={()=> {
              setCount(count + 1)
                }} style={{border: 'none', background: 'none'}}><img src={plus} alt="" />
    </button>
    </>   
  }
  return (
    <>
        <button onClick={()=> {
              setCount(count - 1)
                }} style={{border: 'none', background: 'none'}}><img src={min} alt="" /></button>
        <h3>{count}</h3>
        <button onClick={()=> {
              setCount(count + 1)
                }} style={{border: 'none', background: 'none'}}><img src={plus} alt="" /></button>
          
    </>
  )
}

export default ButtonCount