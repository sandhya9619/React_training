import React from 'react'
import MyFunctioncomponent from './MyFunctioncomponent'

export default function MyFunctioncomponent01() {
    const li =[1,2,3,4,5,6]
  return (
    <div>
        {
            li.map((e,i)=>{
                return <MyFunctioncomponent key={i} />
            })
        }
    </div>
  )
}
