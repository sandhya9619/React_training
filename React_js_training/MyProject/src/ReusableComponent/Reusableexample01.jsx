import React from 'react'
import ReusableCompexample01 from './ReusableCompexample01'

export default function Reusableexample01() {
  return (
    <div>
        <ReusableCompexample01 onclick={()=>alert("hello")}> click here 1</ReusableCompexample01>
        <ReusableCompexample01 onclick={()=>alert("hello")} color={"black"}> click here 2</ReusableCompexample01>
    </div>
  )
}
