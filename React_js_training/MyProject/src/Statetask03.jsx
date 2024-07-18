import React, { useState } from 'react'

export default function Statetask03() {
    const [size,setFontsize]=useState(50)

    let increase = () =>{
        setFontsize(size+1)
    }
    let decrease = () => {
      setFontsize(size - 1);
    };
  return (
    <div>
        <h1 style={{fontSize:size}}>Size</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}