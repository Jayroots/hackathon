import React from 'react';
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'


const NavBar = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome />Home</a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /> Album </a>
            {/* <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BiBook /> Team </a> */}
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}> <RiServiceLine /> Contact</a>


        </nav>
    )
}


export default NavBar

/* const NavBar = () => {
    return (
        <nav className='NavBar'>
            <ul>
                <li>Home</li>
                <li>Album</li>
                {/* <li/* >Team</li> */
/*    <li>Contact</li> */
/*  */
/*       </ul>
  </nav>
);
};
*/
/* export default NavBar; */