import React from 'react'
import Programme02 from './Programme02';
import Programme01 from './Programme01';

export default function Programme03() {
    const loginis = true;
  return (
    <div>
        {loginis ? <Programme01/> : <Programme02/>}
    </div>
  )
}
