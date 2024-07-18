import React from 'react'

import { usercontext } from './Useexample01'
export default function Useexample03() {
  let record =usecontext(usercontext)

  return (
    <div>
        {record}
    </div>
  )
}
