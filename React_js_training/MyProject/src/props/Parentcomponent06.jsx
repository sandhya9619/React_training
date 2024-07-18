import React from 'react'
import Childcomponent06 from './Childcomponent06';

export default function Parentcomponent06() {
    const myproject=["java","react","python","data"];

  return (
    <div>
        <Childcomponent06 product={myproject}></Childcomponent06>
    </div>
  )
}
