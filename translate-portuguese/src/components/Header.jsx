import React from 'react';
import logo from '../brazilflag.webp'



const Header = () => {
    return (
      <header className="header">
        <img
          src={logo} 
          className="header-img" 
          alt="Smaller image" 
        />
        <h1 style={{ margin: 0 }}>Translate Portuguese</h1> {/* overiding some CSS issues here*/} 
      </header>
    );
  };  

export default Header;