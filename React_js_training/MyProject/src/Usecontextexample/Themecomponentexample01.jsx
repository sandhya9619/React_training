import React, { Children, createContext, useState } from 'react'

export const themecontext = createContext();
export default function Themecomponentexample01(Children) {
    const[theme,setTheme]= useState("light");

    const togglrTheme=()=>{
        // setTheme((prevtheme) => prevtheme ==="light" ? "dark" : "light");

        setTheme(theme === "light" ? "dark" : "dark");

    }
  return (
    <div>
        <themecontext.Provider value={{theme,togglrTheme}}>
            {Children}
        </themecontext.Provider>
    </div>
  )
}
