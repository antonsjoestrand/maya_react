import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "../sass/app.scss";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import NavBar from "./NavBar/NavBar.jsx";
import Header from "./Header/Header.jsx";

export default function About() {
  document.title = "About - Maya Sorvala";

  const { isAuthenticated } = useAuth0();

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  // ======== ABOUT CRUD OPERATIONS ========
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://61a3ed8fd5e83300172921dd.mockapi.io/about`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    window.scrollTo(0, 0);

    let { id, profile_image, about_text, career_text } = data;
    localStorage.setItem("id", id);
    localStorage.setItem("profile_image", profile_image);
    localStorage.setItem("about_text", about_text);
    localStorage.setItem("career_text", career_text);
  };

  // ======== SKILLS CRUD OPERATIONS ========
  const [SkillAPIData, setSkillAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://61a3ed8fd5e83300172921dd.mockapi.io/skills`)
      .then((response) => {
        setSkillAPIData(response.data);
      });
  }, []);

  const setSkillData = (data) => {
    window.scrollTo(0, 0);

    let { id, skill } = data;
    localStorage.setItem("id", id);
    localStorage.setItem("skill", skill);
  };

  const getSkillData = () => {
    axios
      .get(`https://61a3ed8fd5e83300172921dd.mockapi.io/skills`)
      .then((getData) => {
        setSkillAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://61a3ed8fd5e83300172921dd.mockapi.io/skills/${id}`)
      .then(() => {
        getSkillData();
      });
  };

  return (
    <div className='background-alt'>
      <div className='wrapper'>
        <NavBar />

        <Header name='About Me' />

        <main className='main-secondary'>
          {/* ======== ABOUT ======== */}

          <div className='mobile-wrapper'>
            <section className='about'>
              <div>
                <div className='category'>
                  <i className='fas fa-book-user'></i>
                </div>
              </div>
              <div className='small-wrapper'>
                {APIData.map((data) => {
                  return (
                    <div className='about__content' key={data.id}>
                      <div className='story flex pb-l'>
                        <div className='title'>
                          <h3 className='title-h3'>
                            "Hello! I'm Maya Sorvala!"
                          </h3>

                          <div className='title-stroke'></div>

                          {isAuthenticated && (
                            <div className='crud-button'>
                              <Link to='/about/update'>
                                <button
                                  className='edit'
                                  onClick={() => setData(data)}
                                >
                                  Edit
                                </button>
                              </Link>
                            </div>
                          )}

                          <p className='paragraph'>{data.about_text}</p>
                        </div>
                        <div className='profile'>
                          <img src={data.profile_image} alt='Maya Sorvala' />
                        </div>
                      </div>

                      {/* ======== CAREER ======== */}

                      <div className='career flex pb-l'>
                        <div className='title'>
                          <Fade bottom>
                            <h4 className='title-h4'>My career so far</h4>
                          </Fade>
                          <Fade bottom>
                            <p className='paragraph'>{data.career_text}</p>
                          </Fade>
                        </div>
                        <Fade right>
                          <div className='skills flex'>
                            {SkillAPIData.map((data) => {
                              return (
                                <div key={data.id}>
                                  {isAuthenticated && (
                                    <div>
                                      <Link to='/skill/update'>
                                        <button
                                          className='edit-icon'
                                          onClick={() => setSkillData(data)}
                                        >
                                          <i className='fas fa-pen'></i>
                                        </button>
                                      </Link>
                                      <button
                                        className='delete-icon'
                                        onClick={() => onDelete(data.id)}
                                      >
                                        <i className='fas fa-trash'></i>
                                      </button>
                                    </div>
                                  )}
                                  <button>{data.skill}</button>
                                </div>
                              );
                            })}
                            {isAuthenticated && (
                              <Link to='/skill/create'>
                                <button
                                  className='edit-icon'
                                  onClick={scrollTop}
                                >
                                  <i className='far fa-plus'></i>
                                </button>
                              </Link>
                            )}
                          </div>
                        </Fade>
                      </div>

                      <Fade bottom>
                        <div className='social flex pb-l'>
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
                      </Fade>
                      <Fade top>
                        <div className='cta'>
                          <Link to='/contact' onClick={scrollTop}>
                            Contact me
                          </Link>
                          <i className='far fa-arrow-right'></i>
                        </div>
                      </Fade>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
