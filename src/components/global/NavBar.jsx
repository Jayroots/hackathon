
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
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/album">
                        Album
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

