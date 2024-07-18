import React, { useState } from 'react'

export default function Setexample03() {
    const[name,setName]=useState("sandhya")
    return (
        <div>

            <h1> My front end :- {name}</h1>
            <button onClick={() => setName(" React js")}>change</button>
        </div>
    )
}
