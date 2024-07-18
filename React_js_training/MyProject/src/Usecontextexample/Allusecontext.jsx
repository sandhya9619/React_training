import React from 'react'
import Example01 from './Example01usecontext'
import Example01usecontext from './Example01usecontext'
import Componentexample01 from './Componentexample01'
import Themecomponentexample01 from './Themecomponentexample01'
import Themechildcomponent from './Themechildcomponent'

export default function Allusecontext() {
  return (
    <div>
        {/* <Example01usecontext/> */}

        {/* <Componentexample01/> */}

        <Themecomponentexample01>
          <Themechildcomponent/>
        </Themecomponentexample01>
    </div>
  )
}
