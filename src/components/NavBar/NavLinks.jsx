import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./NavBar.scss";
import "../../sass/app.scss";

const NavLinks = () => {
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();

  return (
    <ul>
      <li key='nav_work'>
        <NavLink to='/work' className='nav'>
          Work
        </NavLink>
      </li>
      <li key='nav_about'>
        <NavLink to='/about' className='nav'>
          About
        </NavLink>
      </li>
      <li key='nav_accolades'>
        <NavLink to='/accolades' className='nav'>
          Accolades
        </NavLink>
      </li>
      <li key='nav_contact'>
        <NavLink to='/contact' className='contact'>
          Contact
        </NavLink>
      </li>
      {isAuthenticated && (
        <li key='nav_logout'>
          <button className='logout' onClick={() => logout()}>
            Logout
          </button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
