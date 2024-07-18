import React from 'react'

export default function Childcomponent05(props) {
  return (
    <div>
      <h1>{props.subject}</h1>
    </div>
  )
}
Childcomponent05.defaultProps={
  subject:"react"
}
