import React from 'react'
import { Link } from 'react-router-dom'

export default function Contactpage() {
  return (
    <div>
        <h3>contact page</h3>
        <Link to={"/About"}> <p>click here to about page</p></Link>
    </div>
  )
}
