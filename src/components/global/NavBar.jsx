
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import imageterre from "../../assets/images/album-photo.png";
import { useState } from 'react'




import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <div className='navy-container'>
        <h1 className='titrePage'><img className='imageterre' src={imageterre}/>Look Grand’MA</h1>
       
        <nav>
            <ul className='nav-container-ul'>
                <li className='nav-container-li'>
                    <NavLink className="primary-btn" to="/">
                        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome /></a>
                        <p>Home</p>
                    </NavLink>

                </li>
                <li className='nav-container-li'>
                    <NavLink className="primary-btn" to="/album">
                        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser /></a>
                        <p>Album</p>
                    </NavLink>

                </li>
                <li className='nav-container-li'>

                    <NavLink className="primary-btn" to="/team">
                        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BiBook /></a>
                        <p>Team</p>
                    </NavLink>
                </li>
                <li className='nav-container-li'>
                    <NavLink className="primary-btn" to="/contact">
                        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageSquareDetail /></a>
                        <p>Contact</p>
                    </NavLink>


                </li>




            </ul>


        </nav>
        </div>
    )
}


export default NavBar