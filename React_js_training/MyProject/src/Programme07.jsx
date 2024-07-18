import React from 'react'

export default function Programme07() {
    const subjlist = ["c","c++","java","python"];
    
  return (
    <div>
        {subjlist.map((e,i)=>{
            return <h1 key={i}>{e}</h1>
        })}
    </div>
  )
}
