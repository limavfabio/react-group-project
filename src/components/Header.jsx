import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import style from '../styles/Header.module.css';

function Header() {
  return (
    <div className={style.header}>
      <img className={style.logo} src={logo} alt="logo" />
      <h2 className={style.title}>Space Travelers Hub</h2>
      <ul className={style.ul}>
        <li className={style.li}>
          <NavLink to="/Rockets">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/">Missions</NavLink>
        </li>
        <span className={style.separator}>|</span>
        <li>My Profile</li>
      </ul>
    </div>
  );
}

export default Header;
