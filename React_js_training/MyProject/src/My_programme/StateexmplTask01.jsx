import React, { useState } from 'react'

export default function StateexmplTask01() {
    const [colour, setcolour] = useState("white")
    return (
        <div style={{ backgroundColor: colour }}>
            <h1>hello ahmedabad</h1>
            <button onClick={() => setcolour("blue")}>blue color</button>
            <button onClick={() => setcolour("pink")}>pink color</button>
            <button onClick={() => setcolour("purple")}>purple color</button>
            <button onClick={() => setcolour("yellow")}>yellow color</button>
            <button onClick={() => setcolour("red")}>red color</button>
        </div>
    )
}
