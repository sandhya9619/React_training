import React from 'react'

export default function Childcoponent07(props) {
  return (
    <div>
        {
            props.data.map((e,i)=>{
                return <div key={i}>
                   <h3> {e.id}</h3>
                   <h3> {e.subject}</h3>
                    <h3>{e.city}</h3>

                </div>
            })
        }
    </div>
  )
}
