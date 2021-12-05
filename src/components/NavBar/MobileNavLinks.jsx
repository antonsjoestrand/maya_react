import React from "react";
import "./NavBar.scss";
import "../../sass/app.scss";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const MobileNavLinks = (props) => {
  const animateFrom = { opacity: 0, x: 40 };
  const animateTo = { opacity: 1, x: 0 };

  return (
    <motion.div
      initial={animateFrom}
      animate={animateTo}
      className='MobileMenu'
    >
      <ul>
        <motion.li
          key='nav_work'
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.05 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <NavLink to='/work' className='nav'>
            Work
          </NavLink>
        </motion.li>
        <motion.li
          key='nav_about'
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.1 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <NavLink to='/about' className='nav'>
            About
          </NavLink>
        </motion.li>
        <motion.li
          key='nav_accolades'
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.15 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <NavLink to='/accolades' className='nav'>
            Accolades
          </NavLink>
        </motion.li>
        <motion.li
          key='nav_contact'
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <NavLink to='/contact' className='contact'>
            Contact
          </NavLink>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default MobileNavLinks;
