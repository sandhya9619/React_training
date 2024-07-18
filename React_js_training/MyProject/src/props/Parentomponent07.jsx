import React from 'react'
import Childcoponent07 from './Childcoponent07'

export default function Parentomponent07() {
    const mydata=[
        {id:"1",subject:"java",city:"ahmedabad"},
        {id:"2",subject:"react",city:"ahmedabad"},
        {id:"3",subject:"python",city:"ahmedabad"}
    ]
  return (
    <div>
        {/* <Childcomponent07 data={mydata}></Childcomponent07> */}
        <Childcoponent07 data={mydata}></Childcoponent07>
    </div>
  )
}
