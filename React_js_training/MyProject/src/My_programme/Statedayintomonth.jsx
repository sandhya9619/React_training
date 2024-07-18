import React, { useState } from 'react'

export default function Statedayintomonth() {
    const [day, setday] = useState("");
    const [data, setdata] = useState("");

    const handlesubmit = () => {
        setdata(day / 30)
    }
    return (
        <div>
            <input type="number" placeholder='Enter day' value={day} onChange={(e) => setday(e.target.value)} />
            <br />
            <button onClick={handlesubmit}>click</button>
            <br />
            <p>month,{data}</p>

        </div>
    )
}
