import React, { createContext, useState } from 'react'
import Componentexample04 from './Componentexample04'

export const mycontext = createContext()
export default function Componentexample01() {
    const[name,setName]=useState("")
    const[subject,setSubject]=useState("")
  return (
    <div>
        <h3>component 1</h3>
        <input type="text" placeholder='Enter name' onChange={(e)=>setName(e.target.value)} />

        <input type="text" placeholder='Enter subject' onChange={(e)=>setSubject(e.target.value)} />

        <mycontext.Provider value={{name,subject}}>
            <Componentexample04/>
        </mycontext.Provider>


    </div>
  )
}
