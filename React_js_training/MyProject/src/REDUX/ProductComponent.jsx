import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ProductComponent() {
    let dispatch = useDispatch();

    let{product,pending,error} = useSelector((state)=>{
        return state.productkey;
    });

    if(pending) return <h1>Loading...</h1>
    
  return (
    <div>

    </div>
  )
}
