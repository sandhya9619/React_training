import React, { useState } from 'react'

export default function StateString() {
    const [name, setName] = useState("")
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={()=>setName("My React Js")}>change</button>
    </div>
  )
}
