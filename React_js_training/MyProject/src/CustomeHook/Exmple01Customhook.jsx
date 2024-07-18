
import React, { useState } from 'react'
import Usecustomehook from './Usecustomehook'

export default function Exmple01Customhook() {

    // const[count,setCount]=useState(0);

    // function addcount(){
    //     setCount(count+1);
    // }
    // function removecount(){
    //     setCount(count-1);
    // }

    const[count,addcount,removecount]=Usecustomehook();
  return (
    <div>
        {count}
        <button onClick={addcount}>Add count</button>
        <button onClick={removecount}>Remove count</button>
    </div>
  )
}
