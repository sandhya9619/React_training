import React from 'react'

export default function Programme02() {
    const status = true;
  return (
    <div> 
        {/* {&& : logical and operator} */}

        {status && <h1>hello user.!</h1>}

        {/* {status && <h1>hello user.!</h1> } it will return error */}
    </div>
  )
}
