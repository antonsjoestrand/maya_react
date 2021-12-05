import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "../sass/app.scss";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import NavBar from "./NavBar/NavBar.jsx";
import Header from "./Header/Header.jsx";

export default function Accolades() {
  document.title = "Accolades - Maya Sorvala";

  const { isAuthenticated } = useAuth0();

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  // ======== AWARD CRUD OPERATIONS ========
  const [AwardAPIData, setAwardAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://61a3ed8fd5e83300172921dd.mockapi.io/awards`)
      .then((response) => {
        setAwardAPIData(response.data);
      });
  }, []);

  const setAwardData = (data) => {
    window.scrollTo(0, 0);

    let { id, award_type, award_title, award_text, award_link } = data;
    localStorage.setItem("id", id);
    localStorage.setItem("award_type", award_type);
    localStorage.setItem("award_title", award_title);
    localStorage.setItem("award_text", award_text);
    localStorage.setItem("award_link", award_link);
  };

  const getAwardData = () => {
    axios
      .get(`https://61a3ed8fd5e83300172921dd.mockapi.io/awards`)
      .then((getData) => {
        setAwardAPIData(getData.data);
      });
  };

  const onAwardDelete = (id) => {
    axios
      .delete(`https://61a3ed8fd5e83300172921dd.mockapi.io/awards/${id}`)
      .then(() => {
        getAwardData();
      });
  };

  // ======== ARTICLE CRUD OPERATIONS ========
  const [ArticleAPIData, setArticleAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://61a3ed8fd5e83300172921dd.mockapi.io/articles`)
      .then((response) => {
        setArticleAPIData(response.data);
      });
  }, []);

  const setArticleData = (data) => {
    window.scrollTo(0, 0);

    let { id, article_type, article_publisher, article_title, article_link } =
      data;
    localStorage.setItem("id", id);
    localStorage.setItem("article_type", article_type);
    localStorage.setItem("article_publisher", article_publisher);
    localStorage.setItem("article_title", article_title);
    localStorage.setItem("article_link", article_link);
  };

  const getArticleData = () => {
    axios
      .get(`https://61a3ed8fd5e83300172921dd.mockapi.io/articles`)
      .then((getData) => {
        setArticleAPIData(getData.data);
      });
  };

  const onArticleDelete = (id) => {
    axios
      .delete(`https://61a3ed8fd5e83300172921dd.mockapi.io/articles/${id}`)
      .then(() => {
        getArticleData();
      });
  };

  // ======== ARTICLE CRUD OPERATIONS ========
  const [TestimonialAPIData, setTestimonialAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://61a3ed8fd5e83300172921dd.mockapi.io/testimonials`)
      .then((response) => {
        setTestimonialAPIData(response.data);
      });
  }, []);

  const setTestimonialData = (data) => {
    window.scrollTo(0, 0);

    let { id, testimonial_name, testimonial_text } = data;
    localStorage.setItem("id", id);
    localStorage.setItem("testimonial_name", testimonial_name);
    localStorage.setItem("testimonial_text", testimonial_text);
  };

  const getTestimonialData = (data) => {
    axios
      .get(`https://61a3ed8fd5e83300172921dd.mockapi.io/testimonials`)
      .then((getData) => {
        setTestimonialAPIData(getData.data);
      });
  };

  const onTestimonialDelete = (id) => {
    axios
      .delete(`https://61a3ed8fd5e83300172921dd.mockapi.io/testimonials/${id}`)
      .then(() => {
        getTestimonialData();
      });
  };

  return (
    <div className='background-alt'>
      <div className='wrapper'>
        <NavBar />

        <Header name='Accolades' />

        <main className='main-secondary'>
          {/* ======== AWARDS ======== */}

          <div className='mobile-wrapper'>
            <section className='awards'>
              <div className='category'>
                <i className='fas fa-award'></i>
              </div>

              <div className='small-wrapper'>
                <div className='awards__content'>
                  <div className='title pb-s'>
                    <h3 className='title-h3'>Awards & recognitions</h3>
                    <div className='title-stroke'></div>
                  </div>

                  <div className='accolade-cards'>
                    {AwardAPIData.map((data) => {
                      return (
                        <div className='accolade' key={data.id}>
                          {isAuthenticated && (
                            <div className='crud-button'>
                              <Link to='/award/update'>
                                <button
                                  className='edit'
                                  onClick={() => setAwardData(data)}
                                >
                                  Edit
                                </button>
                              </Link>
                              <button
                                className='delete'
                                onClick={() => onAwardDelete(data.id)}
                              >
                                Delete
                              </button>
                            </div>
                          )}
                          <a
                            href={data.award_link}
                            target='_blank'
                            rel='noreferrer'
                            className='card flex'
                          >
                            <p className='type'>
                              <i className='fas fa-award'></i>
                              {data.award_type}
                            </p>
                            <h4 className='title-h4'>{data.award_title}</h4>
                            <p className='paragraph'>{data.award_text}</p>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                  {isAuthenticated && (
                    <div className='crud-button'>
                      <Link to='/award/create'>
                        <button className='edit' onClick={scrollTop}>
                          Add award
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* ======== ARTICLES ======== */}

            <section className='articles'>
              <Pulse>
                <div className='category'>
                  <i className='fas fa-newspaper'></i>
                </div>
              </Pulse>

              <div className='small-wrapper'>
                <div className='articles__content'>
                  <div className='title pb-s'>
                    <Fade bottom>
                      <h3 className='title-h3'>Article mentions</h3>
                    </Fade>
                    <Fade>
                      <div className='title-stroke'></div>
                    </Fade>
                  </div>

                  <Fade bottom>
                    <div className='accolade-cards'>
                      {ArticleAPIData.map((data) => {
                        return (
                          <div className='accolade' key={data.id}>
                            {isAuthenticated && (
                              <div className='crud-button'>
                                <Link to='/article/update'>
                                  <button
                                    className='edit'
                                    onClick={() => setArticleData(data)}
                                  >
                                    Edit
                                  </button>
                                </Link>
                                <button
                                  className='delete'
                                  onClick={() => onArticleDelete(data.id)}
                                >
                                  Delete
                                </button>
                              </div>
                            )}
                            <a
                              href={data.article_link}
                              target='_blank'
                              rel='noreferrer'
                              className='card flex'
                            >
                              <p className='type'>
                                <i className='fas fa-newspaper'></i>
                                {data.article_type}
                              </p>
                              <h4 className='title-h4'>
                                {data.article_publisher}
                              </h4>
                              <p className='paragraph'>{data.article_title}</p>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </Fade>
                  {isAuthenticated && (
                    <div className='crud-button'>
                      <Link to='/article/create'>
                        <button className='edit' onClick={scrollTop}>
                          Add article
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* ======== TESTIMONIALS ======== */}

            <section className='testimonials'>
              <Pulse>
                <div className='category'>
                  <i className='fas fa-comment-lines'></i>
                </div>
              </Pulse>

              <div className='small-wrapper'>
                <div className='testimonials__content'>
                  <div className='title pb-s'>
                    <Fade bottom>
                      <h3 className='title-h3'>Testimonials</h3>
                    </Fade>
                    <Fade>
                      <div className='title-stroke'></div>
                    </Fade>
                  </div>

                  <Fade bottom>
                    <div className='testimonial-cards'>
                      {TestimonialAPIData.map((data) => {
                        return (
                          <div className='card flex' key={data.id}>
                            {isAuthenticated && (
                              <div className='crud-button'>
                                <Link to='/testimonial/update'>
                                  <button
                                    className='edit'
                                    onClick={() => setTestimonialData(data)}
                                  >
                                    Edit
                                  </button>
                                </Link>
                                <button
                                  className='delete'
                                  onClick={() => onTestimonialDelete(data.id)}
                                >
                                  Delete
                                </button>
                              </div>
                            )}
                            <h4 className='title-h4'>
                              <i className='fas fa-comment-lines'></i>
                              {data.testimonial_name}
                            </h4>
                            <p className='paragraph'>
                              "{data.testimonial_text}"
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </Fade>
                  {isAuthenticated && (
                    <div className='crud-button'>
                      <Link to='/testimonial/create'>
                        <button className='edit' onClick={scrollTop}>
                          Add testimonial
                        </button>
                      </Link>
                    </div>
                  )}
                  <Fade top>
                    <div className='cta'>
                      <Link to='/contact' onClick={scrollTop}>
                        Contact me
                      </Link>
                      <i className='far fa-arrow-right'></i>
                    </div>
                  </Fade>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
