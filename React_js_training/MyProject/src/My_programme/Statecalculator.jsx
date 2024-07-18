import React, { useState } from 'react'

export default function Statecalculator() {
    const [num01, setnum01] = useState("");
    const [num02, setnum02] = useState("");

    const [data, setdata] = useState("");

    const handlesubmit = () => {
        setdata(parseInt(num01) + parseInt(num02))
    }
      const minusdata=()=>{
        setdata(num01-num02)
      }
      const devidedata=()=>{
        setdata(num01/num02)
      }
      const multidata=()=>{
        setdata(num01*num02)
      }
    return (
        <div>

            <input type="number" placeholder='Enter num01' value={num01} onChange={(e) => setnum01(e.target.value)} />
            <br />
            <input type="number" placeholder='Enter num02' value={num02} onChange={(e) => setnum02(e.target.value)} />
            <br />
            <br />

            <button onClick={handlesubmit}>+</button>
            <button onClick={minusdata}>_</button>
            <button onClick={devidedata}>/</button>
            <button onClick={multidata}>*</button>

            <h1>{data}</h1>
        </div>
    )
}
