import React from 'react'

export default function MyFunctioncomponent02() {
    const sublist = ["c", "c++", "java", "python"];
  return (
    <div>
        
        <ul>
           { sublist.map((e,i)=>{
            return    <li key={i}>{e}</li>
            })}
        </ul>
    </div>
  )
}
