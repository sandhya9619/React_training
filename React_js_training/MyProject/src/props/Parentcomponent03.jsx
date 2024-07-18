import React from 'react'
import Childcomponent03 from './Childcomponent03'

export default function Parentcomponent03() {
    const handleevent = () => {
        alert("hello...")
    }
    return (
        <div>
            <button onClick={handleevent}>click-parant component</button>

            <Childcomponent03 myfun={handleevent}/>
        </div>
    )
}
