import React, { useEffect, useState } from 'react'

export default function Hookblankdependancy04() {
    const[data,setData]=useState(0)

    useEffect(()=>{
        console.log("useEffect called");
    },[]) // it invoke once in aa programme before initialisation 
  return (
    <div>
        {data}
        <button onClick={()=> setData(data+1)}>Click here</button>
    </div>
  )
}
