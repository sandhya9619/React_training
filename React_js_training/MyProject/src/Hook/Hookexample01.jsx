import React, { useEffect, useState } from 'react'

export default function Hookexample01() {
    const [count,setCount]=useState(0)
    const[num,setNum]=useState(0);

    useEffect(()=>{
        console.log("clicked ");
    })
  return (
    <div>
        <h3>{count}</h3>
        <h3>{num}</h3>
        <button onClick={()=>setCount(count+1)}>click for use effect</button>
        <button onClick={()=>setNum(num+1)}>click for use num</button>
    </div>
  )
}
