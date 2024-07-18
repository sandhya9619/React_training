import React from 'react'
import { useParams } from 'react-router-dom'

export default function Paramspage02() {
    const {id, name} = useParams();

  return (
    <div>
        <h1> page 2</h1>

        <h3>id = {id}</h3>

        {name && <h3> name = {name}</h3>}
    </div>
  )
}
