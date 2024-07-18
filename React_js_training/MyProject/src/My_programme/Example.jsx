import React, { useState } from 'react'

export default function Example() {
  const [name, setName] = useState("hello")

  const handleevent = () => {
    setName("hii")
    setTimeout(() => {
      setName("hello")
    }, 2000);

  }
  return (
    <div>
      <h1> {name} </h1>


      <button onClick={handleevent}>Click</button>
    </div>
  )
}
