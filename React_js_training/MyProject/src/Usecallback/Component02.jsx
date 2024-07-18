import React, { memo } from 'react'

 function Component02({mylist,addrecord}) {
    console.log("-----> component 2 is calling ");

  return (
    <div>
        {
            mylist.map((value,index)=>{
                return <h4 key={index}>{value}</h4>
            })
        }
        <button onClick={addrecord}>Add Record</button>
    </div>
  )
}
export default memo(Component02);
