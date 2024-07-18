import React from 'react'
import Example03 from './Example03usecontext'
import Example03usecontext from './Example03usecontext'

export default function Example02usecontext(props) {
  return (
    <div>
        <h3>2nd component</h3>
        {/* <Example03usecontext msg={props.msg}/> */}

        <Example03usecontext msg={props.msg}/>
    </div>
  )
}
