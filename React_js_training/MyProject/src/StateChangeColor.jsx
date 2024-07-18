import React, { useState } from 'react'

export default function StateChangeColor() {

    const [bgcolor, setBgcolor] = useState("red")
    return (
        <div style={{ backgroundColor: bgcolor }}>
            <h1>hello</h1>
            <button onClick={() => setBgcolor("blue")}>change color</button>
        </div>
    )
}
