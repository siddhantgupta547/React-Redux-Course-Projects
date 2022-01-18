import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.styles.scss';
import logo from '../crown.svg';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="Logo" />+
        </div>
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact Us
        </Link>
        <Link to="/signin" className="option">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
