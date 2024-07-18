import React, { useState } from 'react'

export default function Statemonthintodays() {
    const [month, setmonth] = useState("");
    const [data, setdata] = useState("");

    const handlesubmit = () => {
        setdata(month * 30)
    }
    return (
        <div>
            <input type="number" placeholder='Enter month' value={month} onChange={(e) => setmonth(e.target.value)} />
            <br />
            <button onClick={handlesubmit}>click</button>
            <br />
            <p>day,{data}</p>

        </div>
    )
}
