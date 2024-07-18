import React, { useState } from 'react'

export default function Stateexmpleinput01() {
    const [username, setUsername]=useState("");
    const [data, setData]= useState("");

    const handlesubmit=()=>{
        setData(username)
        setUsername("")
    }
  return (
    <div>

        <input type="text" placeholder='Enter username' value={username} onChange={(e)=>
        setUsername(e.target.value)}  />

        <h1>{data}</h1>

        <button onClick={handlesubmit}>submit</button>
    </div>
  )
}
