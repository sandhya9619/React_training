import React, { useState } from 'react'

export default function StateExmplinput() {
    const[username, setUsername] = useState("");
  return (
    <div>

        <input type="text" placeholder='Enter username' onChange={(e)=>setUsername(e.target.value)} />

        <h1>{username}</h1>
    </div>
  )
}
