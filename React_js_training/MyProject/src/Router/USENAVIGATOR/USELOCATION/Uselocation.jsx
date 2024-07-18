import React from 'react'
import { useLocation } from 'react-router-dom';
export default function Uselocation() {
    const location = useLocation();

  return (
    <div>
        <h3>Use location </h3>
        <p>{location.pathname}</p>
        <p>{location.search}</p>
        <p>{location.hash}</p>


    </div>
  )
}
