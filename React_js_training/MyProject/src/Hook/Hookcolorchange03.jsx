import React, { useEffect, useState } from 'react'

export default function Hookcolorchange03() {
    const[color,setcolor]=useState(0);

    let arr =["red","purple","yellow","grey","green"];
    useEffect(()=>{
        // document.body.style.backgroundColor=arr[color];
        document.body.style.backgroundColor=arr[color]
        console.log("hello")
    },[color]);


  return (
    <div>
        <button onClick={()=>setcolor(color+1)}>click</button>
    </div>
  )
}


