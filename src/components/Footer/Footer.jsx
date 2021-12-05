import React from "react";
import "../../sass/app.scss";

function Footer() {
  return (
    <footer>
      <div className='wrapper'>
        <div className='footer flex'>
          <div className='footer-logo'>
            <a href='/'>
              <div className='logo'></div>
            </a>
          </div>
          <div className='copy'>
            <p>
              &copy; 2021 <a href='/'>Maya Sorvala</a>, All rights reserved.
            </p>
          </div>
          <div className='social flex'>
            <a
              href='https://www.artstation.com/mayasorvala8'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-artstation'></i>
            </a>
            <a href='/' target='_blank' rel='noreferrer'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='/' target='_blank' rel='noreferrer'>
              <i className='fab fa-linkedin-in'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
