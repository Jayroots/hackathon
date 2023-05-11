
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'




import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <NavLink className="primary-btn" to="/">
                <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome /></a>
                <p>Home</p>
            </NavLink>
            <NavLink className="primary-btn" to="/album">
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser /></a>
                <p>Album</p>
            </NavLink>
            <NavLink className="primary-btn" to="/team">
                <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BiBook /></a>
                <p>Team</p>
            </NavLink>
            <NavLink className="primary-btn" to="/contact">
                <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageSquareDetail /></a>
                <p>Contact</p>
            </NavLink>


        </nav>
    )
}


export default NavBar