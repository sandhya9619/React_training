import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Aboutpage() {
  const navigate= useNavigate();
  return (
    <div>
        <h3>About page</h3>
        <button onClick={()=>navigate(-1)}>go back</button>
    </div>
  )
}
