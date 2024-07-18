import React from 'react'

export default function Map01() {
    const sublist = ["c", "c++", "java", "python"];

  return (
   
    sublist.map((e,i)=>{
        return <h1 key={i}>{e}</h1>
    })
  )
}
