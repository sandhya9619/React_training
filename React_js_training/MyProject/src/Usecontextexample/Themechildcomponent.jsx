import React, { useContext } from 'react'
import { themecontext } from './Themecomponentexample01'

export default function Themechildcomponent() {
    const { theme, toggletheme } = useContext(themecontext)

    const mystyle = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white"
    }

    return (
        <div style={{ backgroundColor: mystyle.backgroundColor, color: mystyle.color }}>
            <h3>my current theme{theme}</h3>
            <button onClick={toggletheme}>change theme</button>
        </div>
    )
}
