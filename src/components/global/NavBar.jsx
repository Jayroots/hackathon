
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'



import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="NavBar">
            <ul>
                <li>
                    <NavLink className="primary-btn btn" to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="primary-btn btn" to="/album">
                        Album
                    </NavLink>
                </li>
                <li>
                    <NavLink className="secondary-btn btn" to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

