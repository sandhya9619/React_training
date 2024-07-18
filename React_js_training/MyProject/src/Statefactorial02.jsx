import React, { useState } from 'react'

export default function Statefactorial02() {
    const [number,setNumber]=useState(0);
    const[fact,setFactorial]=useState(0);
    let f=1;

    const findFactorial=(e)=>{
        setNumber(parseInt(e?.target?.value));

    }

    const factorialValue=()=>{
        for (let i = 0; i <= number; i++) {
            f*=i;
            setFactorial(f);
        }
    }
  return (
    <div>
        <input type="text" placeholder='Enter number' onChange={(e)=>findFactorial(e)} />
        <button onClick={factorialValue}>check</button>
        {fact}
    </div>
  )
}
