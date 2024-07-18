import React from 'react'

export default function Childcomponent06(props) {
  return (
    <div>
        {props.product.map((item,index)=>{
        return <div key={index}>{item}</div>
    })}
    </div>
  )
}
