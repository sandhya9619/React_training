import React from 'react'
import { useState } from 'react'

export default function Statetask04() {
  const [name,setName] = useState()

  const array = ["khyati","tanvi","jyoti","sandhya"]

  const handelName=()=>{
      const index =Math.floor(Math.random()*array.length)
      setName(array[index])
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handelName}>Random name</button>
    </div>
  );
}