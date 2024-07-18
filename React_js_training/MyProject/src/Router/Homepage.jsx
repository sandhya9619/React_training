import React from 'react'

import { Link } from 'react-router-dom'
export default function Homepage() {
  return (
    <div>
      <h3>home page</h3>
      <Link to={"/contact"}><p>click here to contact page </p></Link>
    </div>
  )
}
