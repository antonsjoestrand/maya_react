import "./NavBar.scss";
import "../../sass/app.scss";
import MobileNavLinks from "./MobileNavLinks.jsx";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const closeMobileMenu = () => setOpen(false);

  return (
    <div>
      <nav className='MobileNavigation'>
        <a href='/' id='logo' className='MobileLogo'>
          <h1>Maya Sorvala</h1>
        </a>
        <div className='Hamburger'>
          <Hamburger
            toggled={open}
            toggle={setOpen}
            color='#fff'
            direction='right'
            duration={0.4}
          />
        </div>
        {open && (
          <MobileNavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
        )}
      </nav>
    </div>
  );
};

export default MobileNavigation;
