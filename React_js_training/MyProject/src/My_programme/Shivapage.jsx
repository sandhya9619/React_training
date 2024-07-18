import React from 'react'
import "../css/Shiva.css"
export default function Shivapage() {
    return (
        <div className='maindiv'>
            <header>
                <div className='logo'>
                    {/* <img src="./image/thar-logo" alt="" /> */}
                    <h1>Thar</h1>
                </div>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Pages</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
                <div className='icon'>
                    <p>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <i class="fa-brands fa-windows"></i>
                    </p>
                </div>
            </header>
            <div className='section' >
                <div className='section01'>
                    <p className='sectionp'>WELCOME</p>
                    <h1 className='sectionh1'>Smart Idea For<br/> Your Brand Here</h1>
                    <p className='sectionp01'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, sed exercitationem. Facere commodi, maiores esse ea natus accusamus pariatur nulla!</p>
                    <button className='button'>CONTACT US NOW</button>
                </div>
                <div className='section02'></div>
            </div>

        </div>
    )
}
