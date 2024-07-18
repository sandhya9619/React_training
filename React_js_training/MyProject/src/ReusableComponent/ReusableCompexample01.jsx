import { Margin, Padding } from '@mui/icons-material'
import React from 'react'

export default function ReusableCompexample01({onclick,color,children}) {
    const style={
        backgroundColor:color || "purple",
        color:"white",
        Margin:"20px 20px",
        Padding:"20px 20px",
        borderradius :"20px"
    }
  return (
 
    <button onclick={onclick} style={style}>{children}</button>
  )
}
