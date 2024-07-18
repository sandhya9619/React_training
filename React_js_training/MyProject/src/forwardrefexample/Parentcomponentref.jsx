import React, { useRef } from 'react'
import Childcomponentref from './Childcomponentref';

export default function Parentcomponentref() {
    const inputref = useRef();

    const handleSubmit=()=>{
        inputref.current.focus();
    }
  return (
    <div>
      <h3>Parent componentt</h3>
      <Childcomponentref ref={inputref}/>
        {/* <input type="text" ref={inputref} /> */}
        <button onClick={handleSubmit}>click here</button>
    </div>
  )
}
