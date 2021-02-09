import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="nav-container">
            <nav>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/create">Create New</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </nav>
        </div>
    )
}

export default Navbar;