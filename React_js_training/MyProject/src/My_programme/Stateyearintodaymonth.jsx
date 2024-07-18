import React, { useState } from 'react'

export default function Stateyearintodaymonth() {
    const[yeardata,setyeardata]=useState("");
    const[data,setData]=useState("");
    const[data02,setData02]=useState("");

    const handlesubmit =()=>{
setData(yeardata*12)
setData02(yeardata*365)
    }
  return (
    <div>
      <input type="number" placeholder='Enter Year' value={yeardata} onChange={(e)=>setyeardata(e.target.value) } />
      <br />
      <br />
      <button onClick={handlesubmit}>check</button>
      <p>month :-{data}</p>
      {/* <br /> */}
      <p>day :-{data02}</p>
    </div>
  )
}
