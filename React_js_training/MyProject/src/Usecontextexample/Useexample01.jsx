import React, { useState } from 'react'

export const usercontext = createcontext();
export default function Useexample01() {
    const[data,setData]= useState("");

  return (
    <div>
      <h3>1st component</h3>
      <input type="text" placeholder='Enrter data' value={data} onChange={(e)=>setData(e.target.value)} />

    </div>
  )
}
