import React from 'react'
import { useState } from 'react';

import large from '../assets/images/large.jpg'

const ButtonLarge = () => {
    const [largeSize, setLargeSize] = useState(0);

  return (
    <>
    
    <button onClick={()=> {
              setLargeSize(largeSize + 1)
                }} style={{border: 'none', backgroundColor: 'white'}}>
                  <img src={large} alt="" ></img>
                  </button> 
    
    </>
  )
}

export default ButtonLarge;