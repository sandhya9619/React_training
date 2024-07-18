import React from "react";

const Childcomponentref =React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" placeholder="Enter name in child component" ref={ref}/>
        </div>
    )
})

export default Childcomponentref;