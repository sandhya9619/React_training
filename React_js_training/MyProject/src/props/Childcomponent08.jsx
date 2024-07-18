import React from 'react'

export default function Childcomponent08(props) {
  return (
    <div>
      <table border={1}>
        {
          props.data.map((e,i)=>{
            return <tr key={i}>
              <td>{e.Name}</td>
              <td>{e.City}</td>
              <td>{e.Subject}</td>
            </tr>
          })
        }
      </table>
    </div>
  )
}
