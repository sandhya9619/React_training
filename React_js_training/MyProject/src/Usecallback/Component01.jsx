import React, { memo } from 'react'

  function Component01() {
    console.log("-------->component ");
  return (
    <div>
        <h3>component</h3>
    </div>
  )
}
export default memo(Component01);
