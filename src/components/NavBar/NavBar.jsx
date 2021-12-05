import React from "react";
import "./NavBar.scss";
import "../../sass/app.scss";
import MobileNavigation from "./MobileNavigation.jsx";
import Navigation from "./Navigation.jsx";

const NavBar = () => {
  return (
    <div className='NavBar'>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default NavBar;
