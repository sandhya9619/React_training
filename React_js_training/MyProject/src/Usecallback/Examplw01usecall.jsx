import React, { useCallback, useState } from 'react'
import Component01 from './Component01';
import Component02 from './Component02';

export default function Examplw01usecall() {
    const [ count,setCount] = useState(0);

    const[mylist,setMylist]=useState([]);

    const addrecord=useCallback(()=>{
        setMylist([...mylist,"New Record"])
    },[mylist]);

  return (
    <div>
        <h3>{count}</h3>
        {/* <Component01/> */}
        <button onClick={()=>setCount(count+1)}>count +1</button>
        <Component02 mylist={mylist} addrecord={addrecord}/>
    </div>
  )
}
