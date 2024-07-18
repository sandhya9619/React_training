import React, { useState } from 'react'

export default function Simplelocalstorageexample01() {
    const [Name, setname] = useState("");
    const [subject, setSubject] = useState("");
    const [msg, setMsg] = useState("");

    const handlesubmit = () => {
        localStorage.setItem(Name, subject);
        setMsg("sucessfully added")
    }
    return (
        <div>
            <input type="text" placeholder='Enter name' onChange={(e)=>setname(e?.target?.value)}/>
            <input type="text" placeholder='Enter subject' onChange={(e)=>setSubject(e?.target?.value)} />
            <button onClick={handlesubmit}>submit</button>
            {/* <p>{msg}</p> */}
        </div>
    )
}
