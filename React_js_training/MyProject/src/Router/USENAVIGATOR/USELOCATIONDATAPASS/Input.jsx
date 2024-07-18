import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Input() {
    const[name,setName]=useState();
    const navigate = useNavigate();

    const handlebutton=()=>{
        navigate("/out", {state:{name}})
    }
  return (
    <div>
        <input type="text" placeholder='Enter name' onChange={(e)=>setName(e.target.value)} />
        <button onClick={handlebutton}>Send Date</button>
    </div>
  )
}
