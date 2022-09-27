import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <h2>Space Travelers Hub</h2>
      <ul>
        <li>
          <NavLink to="/Rockets">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/">Missions</NavLink>
        </li>
        <span className="separator">*</span>
        <li>My Profile</li>
      </ul>
    </div>
  );
}

export default Header;
