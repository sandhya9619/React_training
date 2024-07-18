import React, { useContext, useState } from 'react'
import Example02 from './Example02usecontext'
import Example02usecontext from './Example02usecontext'

export default function Example01usecontext() {

    const[name,setName]=useState("")
  return (
    <div>
        <input type="text" placeholder='Enter data' value={name} onChange={(e)=>setName(e.target.value)} />

        {/* <Example02usecontext msg={data}/> */}

        <Example02usecontext msg={name}/>
    </div>
  )
}
