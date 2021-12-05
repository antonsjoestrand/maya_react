import React from "react";
import "../sass/app.scss";
import { Link } from "react-router-dom";

export default function Success() {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='main success'>
      <p>Thank you!</p>
      <p>I will get back to you as soon as I can.</p>
      <div className='cta'>
        <Link to='/' onClick={scrollTop}>
          Back to home
        </Link>
        <i className='far fa-arrow-right'></i>
      </div>
    </div>
  );
}
