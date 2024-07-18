import React, { useState } from 'react'

export default function Statefactorialnum() {
    const [firstnum, setfirstnum] = useState("")

    const [data, setdata] = useState("")

    const handlesubmit = (event) => {
        // console.log("clicked");
       let num=1;
    //     for (let index = 1; index <= firstnum; index++) {
    //         num=num*index;
    //         setdata(num)
            
    //     }

        for (let index = firstnum; index >= 1; index--) {
            console.log(index);
            // num=1*index
            num=num+index;
            // setdata((firstnum) * (index))
            setdata(num)
        }
        setfirstnum("");
    }
    return (
        <div>
            <input type="number" placeholder='Enter number' value={firstnum} onChange={(e) => setfirstnum(e.target.value)} />
            <br /><br />
            <button onClick={handlesubmit}>click</button>
            <h1>{data}</h1>
        </div>
    )
}
