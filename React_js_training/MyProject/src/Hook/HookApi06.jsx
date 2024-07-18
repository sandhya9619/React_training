import React, { useEffect, useState } from 'react'

export default function HookApi() {
    const [data,setData]=useState([])

    useEffect(()=>{
        fatchdata();
    },[])

    const fatchdata = async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const res = await response.json();
        setData(res);
    }
  return (
    <div>

    {
    !fatchdata.length == 0
                
    ?
        data.map((e,i)=>{
            return ( <div key={i}>
            <h1>{e.id}</h1>,
            <h1>{e.name}</h1>
            </div>
        )
                            
        })
        :
        <p>loading.....</p>
        }
                
    </div>
  )
}
