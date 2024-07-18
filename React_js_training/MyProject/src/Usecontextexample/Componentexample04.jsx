import React, { useContext } from 'react'
import { mycontext } from './Componentexample01'

export default function Componentexample04() {

    let data = useContext(mycontext)
  return (
    <div>
        <h3>component 4</h3>

        <p>{data.name}</p>
        <p>{data.subject}</p>


    </div>
  )
}
