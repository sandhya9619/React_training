import React, { useState } from 'react'

export default function Statetask05() {
    const [name01, setname01]=useState("");
    const [name02, setname02] = useState("");

    const[data,setdata]=useState("")

    const handlesubmit=()=>{
     setdata(name01 + name02)

     setname01("")
     setname02("")
    }


  return (
    <div>
        <input type="text" placeholder='Enter name01' value={name01}  onChange={(e)=>setname01(e.target.value)} />
<br />
        <input type="text" placeholder='Enter name02' value={name02} onChange={(e)=>setname02(e.target.value)}/>

        <button onClick={handlesubmit}>btn</button>

        <h1> {data} </h1>
    </div>
  )
}
