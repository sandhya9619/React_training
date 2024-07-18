import React, { useState } from 'react'
import Childcomponent04 from './Childcomponent04';

export default function Parentcomponent04() {
    const[isloggin,setLoggin]=useState(false);
    const[msg,setMessage]=useState("MY REACT PROJECT");

    const handleclick=()=>{
        console.log("clicked");
        console.log(isloggin);
        setLoggin(!isloggin)
    }
  return (
    
    <div>
        <button onClick={handleclick}>click here</button>
        {
            isloggin  &&  <Childcomponent04 msg={msg}/>
        }
    </div>
  )
}
