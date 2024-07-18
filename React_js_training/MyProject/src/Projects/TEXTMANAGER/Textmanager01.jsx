import React, { useState } from 'react'

export default function Textmanager01() {
  const[inp,setInp]=useState("")
  const[result,setResult]=useState("")

  const uppercase=()=>{
    let uppercse= inp.toUpperCase();
    setResult(uppercse);
    console.log(uppercse);
  }

  const lowercase=()=>{
    let lowercase = inp.toLowerCase();
    setResult(lowercase);
  }

  // const capitalize=()=>{
  //   let capitalize =inp.toca
  // }

  const totalchar=()=>{
    let totalchar=inp.length;
    setResult(totalchar);
  }

  const totalword=()=>{
    let totalchar=inp.trim().split(/\s+/).length;
    setResult(totalchar);
  }

  const reverse=()=>{
    let reverse=inp.split('').reverse('').join('');
    setResult(reverse);
  }

  const reset=()=>{
    setInp('');
    setResult('');
  }
  return (
    <div>
      <div>
        <input type="text" placeholder='Enter data' value={inp} onChange={(e)=>setInp(e.target.value)} />
        <input type="text" value={result} onChange={(e)=>setResult(e.target.value)} />
      </div>

      <div>
        <button onClick={uppercase}>Uppercase</button>
        <button onClick={lowercase}>Lowercase</button>
        <button >capitalize</button>
        <button onClick={totalchar}>Totalchar</button>
        <button onClick={totalword}>Totalword</button>
        <button onClick={reverse}>Ro</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
