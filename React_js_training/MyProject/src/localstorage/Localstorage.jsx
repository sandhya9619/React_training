import React, { useState } from 'react'

export default function Localstorage() {

    const[name,setName]=useState("");
    const[subject,setSubject]=useState("");
    const[city,setCity]=useState("")

    const[student,setStudent]=useState([])

    const handlsubmit=(e)=>{
        e.preventDefault();

        let s={name,subject,city};
        setStudent([...student,s]);
        console.log(student);

        localStorage.setItem("student",JSON.stringify(student));

    }
  return (
    <div>
        <form action="" onSubmit={handlsubmit}>
            <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder='Enter subject' value={subject} onChange={(e)=>setSubject(e.target.value)} />
            <input type="text" placeholder='Enter city' value={city} onChange={(e)=>setCity(e.target.value)} />

            <button type='submit'>Submit</button>
        </form>
        {/* <p>{student}</p> */}
    </div>
  )
}
