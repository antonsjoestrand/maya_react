import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import emailjs from "emailjs-com";
import "../sass/app.scss";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Phone from "../images/phone.svg";
import Email from "../images/email.svg";
import Location from "../images/location.svg";
import NavBar from "./NavBar/NavBar.jsx";
import Header from "./Header/Header.jsx";
import { useNavigate } from "react-router";

export default function Contact() {
  document.title = "Contact - Maya Sorvala";

  const { isAuthenticated } = useAuth0();

  let navigate = useNavigate();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mryfo99",
        "template_v8dzrca",
        e.target,
        "user_I38gaMwaYFWjSz5rGgvEw"
      )
      .then(
        function () {
          window.scrollTo(0, 0);
          navigate("/success");
        },
        function (error) {
          alert(error);
        }
      );
    e.target.reset();
  }

  // ======== PHONE CRUD OPERATIONS ========
  const [PhoneAPIData, setPhoneAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://61a3ed8fd5e83300172921dd.mockapi.io/phone`)
      .then((response) => {
        setPhoneAPIData(response.data);
      });
  }, []);

  const setPhoneData = (data) => {
    window.scrollTo(0, 0);

    let { id, phone_number } = data;
    localStorage.setItem("id", id);
    localStorage.setItem("phone_number", phone_number);
  };

  // ======== EMAIL CRUD OPERATIONS ========
  const [EmailAPIData, setEmailAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://61a3ed8fd5e83300172921dd.mockapi.io/email`)
      .then((response) => {
        setEmailAPIData(response.data);
      });
  }, []);

  const setEmailData = (data) => {
    window.scrollTo(0, 0);

    let { id, email_address } = data;
    localStorage.setItem("id", id);
    localStorage.setItem("email_address", email_address);
  };

  // ======== PHONE CRUD OPERATIONS ========
  const [CityAPIData, setCityAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://61a3ed8fd5e83300172921dd.mockapi.io/city`)
      .then((response) => {
        setCityAPIData(response.data);
      });
  }, []);

  const setCityData = (data) => {
    window.scrollTo(0, 0);

    let { id, city_location } = data;
    localStorage.setItem("id", id);
    localStorage.setItem("city_location", city_location);
  };

  return (
    <div className='background-alt'>
      <div className='wrapper'>
        <NavBar />

        <Header name='Contact Me' />

        <main className='main-secondary'>
          {/* ======== CONTACT FORM ===== */}

          <div className='mobile-wrapper'>
            <section className='inquires'>
              <div className='category'>
                <i className='fas fa-comments'></i>
              </div>

              <div className='small-wrapper'>
                <div className='inquires__content'>
                  <div className='title pb-s'>
                    <h3 className='title-h3'>Business Inquiries</h3>
                    <div className='title-stroke'></div>
                  </div>

                  <form onSubmit={sendEmail} className='flex'>
                    <div className='form-group'>
                      <input
                        type='email'
                        name='email'
                        placeholder='Your email address'
                      />
                      <label htmlFor='email'>Email</label>
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='subject'
                        placeholder='How can I help?'
                      />
                      <label htmlFor='subject'>Subject</label>
                    </div>
                    <div className='form-group-message'>
                      <textarea
                        name='message'
                        id='message'
                        cols='30'
                        rows='8'
                      ></textarea>
                      <label htmlFor='message'>Message</label>
                    </div>
                    <div className='form-group'>
                      <button type='submit'>Send Message</button>
                      <i className='far fa-arrow-right'></i>
                    </div>
                  </form>
                </div>
              </div>
            </section>

            {/* CONTACT INFORMATION */}

            <section className='contact'>
              <Pulse>
                <div className='category'>
                  <i className='fas fa-id-card'></i>
                </div>
              </Pulse>

              <div className='small-wrapper'>
                <div className='contact__content'>
                  <div className='title pb-s'>
                    <Fade bottom>
                      <h3 className='title-h3'>How to reach me</h3>
                    </Fade>
                    <Fade>
                      <div className='title-stroke'></div>
                    </Fade>
                  </div>

                  <div className='information flex'>
                    <Fade bottom>
                      <div>
                        {PhoneAPIData.map((data) => {
                          return (
                            <div className='info' key={data.id}>
                              <div className='icon'>
                                <img src={Phone} alt='Icon' />
                              </div>
                              <p>{data.phone_number}</p>
                              {isAuthenticated && (
                                <Link to='/phone/update'>
                                  <span
                                    className='edit-icon'
                                    onClick={() => setPhoneData(data)}
                                  >
                                    <i className='fas fa-pen'></i>
                                  </span>
                                </Link>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </Fade>
                    <Fade bottom>
                      <div>
                        {EmailAPIData.map((data) => {
                          return (
                            <div className='info' key={data.id}>
                              <div className='icon'>
                                <img src={Email} alt='Icon' />
                              </div>
                              <p>{data.email_address}</p>
                              {isAuthenticated && (
                                <Link to='/email/update'>
                                  <span
                                    className='edit-icon'
                                    onClick={() => setEmailData(data)}
                                  >
                                    <i className='fas fa-pen'></i>
                                  </span>
                                </Link>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </Fade>
                    <Fade bottom>
                      <div>
                        {CityAPIData.map((data) => {
                          return (
                            <div className='info' key={data.id}>
                              <div className='icon'>
                                <img
                                  src={Location}
                                  alt='Icon'
                                  className='location'
                                />
                              </div>
                              <p>{data.city_location}</p>
                              {isAuthenticated && (
                                <Link to='/city/update'>
                                  <span
                                    className='edit-icon'
                                    onClick={() => setCityData(data)}
                                  >
                                    <i className='fas fa-pen'></i>
                                  </span>
                                </Link>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
