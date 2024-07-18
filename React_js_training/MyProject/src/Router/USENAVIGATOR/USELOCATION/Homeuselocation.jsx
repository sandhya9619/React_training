import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Homeuselocation() {

  return (
    <div>
        <h2>Home page</h2>
       <Link to={"/location"}> <button>go to use location</button></Link>
    </div>
  )
}
