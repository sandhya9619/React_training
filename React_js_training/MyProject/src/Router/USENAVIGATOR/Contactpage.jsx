import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Contactpage() {
  const navigate = useNavigate();
  return (
    <div>
        <h3> usenavigate :contact page</h3>
        <h2 onClick={()=> navigate("/about")}> go to About page</h2>
        <button onClick={()=>navigate(-1)}>go back</button>
    </div>
  )
}
