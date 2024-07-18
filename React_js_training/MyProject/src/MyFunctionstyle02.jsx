import React from 'react'

export default function MyFunctionstyle02() {

    const myStyle = {
        myContainer :{
            backgroundColor :"grey",
            color :"grey",
            height : "250px",
            // border : "2px solid red"
        },
        myheading : {
            backgroundColor :"black",
            color:"white"
        }
    }
  return (
    <div style={myStyle.myContainer}>
        <h1 style={myStyle.myheading}>hello</h1>
    </div>
  )
}
