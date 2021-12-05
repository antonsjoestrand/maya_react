import React from "react";
import "./NavBar.scss";
import "../../sass/app.scss";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks.jsx";

const Navigation = () => {
  return (
    <nav className='Navigation'>
      <ul>
        <li key='nav_logo'>
          <NavLink to='/' id='logo'>
            <h1>Maya Sorvala</h1>
          </NavLink>
        </li>
      </ul>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
