import React from 'react'

export default function Childcomponent03(props) {
  return (
    <div>
        {/* <h1>{props.myfun}</h1> */}

        <button onClick={props.myfun}>click- child component</button>
    </div>
  )
}
