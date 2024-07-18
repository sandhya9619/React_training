import React from 'react'
import { Link } from 'react-router-dom'

export default function Paramspage01() {
  return (
    <div>
        <h1>page 1</h1>
        <Link to={"/params/1"}>id 1 send page 2</Link>

        <Link to={"/params/2"}>id 2 send page 2</Link>
        

        <Link to={"/params/101/React js"}>name  send page 2</Link>

    </div>
  )
}
