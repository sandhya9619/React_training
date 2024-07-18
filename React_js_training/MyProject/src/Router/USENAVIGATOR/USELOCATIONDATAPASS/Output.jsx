import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Output() {
    const location = useLocation();

    const {name} = location.state;
  return (
    <div>
        <h1> msg from 1st screen : {name}</h1>
    </div>
  )
}
