import React, { useEffect, useState } from 'react'

export default function Hookdependanciesexmpl02() {
   
    const[count,setCount]=useState("");
    const[num,setNum]=useState("")


    useEffect(()=>{
        console.log("clicked");
    },[count])
  return (
    <div>
        <h3>{count}</h3>
        <h3>{num}</h3>
        <button onClick={()=>setCount(count+1)}>click for use effect</button>
        <button onClick={()=>setNum(num+1)}>click for use num</button>
    </div>
  )
}
