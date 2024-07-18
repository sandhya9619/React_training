import React, { useState } from 'react'

export default function Randomcolor01() {
    const [bgcolor, setBgcolor] = useState(0)

    const colorArray = ["blue", "pink", "purple", "red", "yellow"];

    const handlerforrandocolor = () => {

        const indexrandom = Math.floor(Math.random() * colorArray.length)
        console.log(indexrandom);
        setBgcolor(indexrandom)
    }
    return (
        <div style={{ backgroundColor: colorArray[bgcolor], color: "white" }}>
            <h1>hello</h1>
            <button onClick={handlerforrandocolor}>random color change</button>
        </div>
    )
}
