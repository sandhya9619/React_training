import React from 'react'

export default function MyFunctionTable() {
    const tabledata = ["name", "sub ","data","list"]
  return (
    <div>
        <table border={1} cellPadding={15} >
            <thead>
            {
                tabledata.map((e,i)=>{
                    return <th key={i}>{e}</th>
                })
            }
            </thead>
        </table>
    </div>
  )
}
