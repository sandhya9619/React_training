import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
export default function Homepage() {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/contact")
  }
  return (
    <div>
      <h3>usenavigate : home page</h3>
      <button onClick={handleclick}>click</button>
      {/* <button onClick={()=>{-1}}>go back</button> */}
    </div>
  )
}
