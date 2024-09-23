import React from 'react';
import { Link } from "react-router-dom";


const Nav = () => {
    return (
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    );
  };

export default Nav;