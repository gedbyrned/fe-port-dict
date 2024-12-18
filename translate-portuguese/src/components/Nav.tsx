import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                {/* Use Link to navigate to the Home and About pages */}
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
