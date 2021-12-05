import React from "react";
import Pulse from "react-reveal/Pulse";
import "../../sass/app.scss";

const Header = (props) => {
  return (
    <div className='mobile-wrapper'>
      <header className='header'>
        <Pulse>
          <h2 className='title-h2'>
            {props.name}
            <div className='stroke'></div>
          </h2>
        </Pulse>
      </header>
    </div>
  );
};

export default Header;
