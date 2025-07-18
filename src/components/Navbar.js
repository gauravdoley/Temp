import React from 'react';
import './Navbar.css';
import FssaiLogo from '../assets/images/FSSAI_Logo-2.png';
import EatRight from '../assets/images/EatRightIndia.png';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={FssaiLogo} alt="FSSAI Logo" className="navbar-logo" />
      </div>

      <div className="navbar-right">
        <img src={EatRight} alt="Eat Right India" className="navbar-logo" />
      </div>
    </header>
  );
};

export default Navbar;
