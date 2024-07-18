import React, { useState } from 'react'

export default function Usecustomehook() {
    const[count,setCount]=useState(0);

    function addcount(){
        setCount(count+1);
    }
    function removecount(){
        setCount(count-1);
    }

    return [count,addcount,removecount]
}
