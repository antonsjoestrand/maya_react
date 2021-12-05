import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../sass/app.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Hero from "./Hero/Hero.jsx";

export default function Home() {
  document.title = "Maya Sorvala";

  const { isAuthenticated } = useAuth0();

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  // ======== CRUD OPERATIONS ========
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://61a3ed8fd5e83300172921dd.mockapi.io/home`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    window.scrollTo(0, 0);

    let {
      id,
      hl_image_1,
      hl_title_1,
      hl_text_1,
      hl_image_2,
      hl_title_2,
      hl_text_2,
      c_title_1,
      c_price_1,
      c_title_2,
      c_price_2,
      c_list_1_1,
      c_list_1_2,
      c_list_1_3,
      c_list_2_1,
      c_list_2_2,
      c_list_2_3,
    } = data;
    localStorage.setItem("id", id);
    localStorage.setItem("hl_image_1", hl_image_1);
    localStorage.setItem("hl_title_1", hl_title_1);
    localStorage.setItem("hl_text_1", hl_text_1);
    localStorage.setItem("hl_image_2", hl_image_2);
    localStorage.setItem("hl_title_2", hl_title_2);
    localStorage.setItem("hl_text_2", hl_text_2);
    localStorage.setItem("c_title_1", c_title_1);
    localStorage.setItem("c_price_1", c_price_1);
    localStorage.setItem("c_title_2", c_title_2);
    localStorage.setItem("c_price_2", c_price_2);
    localStorage.setItem("c_list_1_1", c_list_1_1);
    localStorage.setItem("c_list_1_2", c_list_1_2);
    localStorage.setItem("c_list_1_3", c_list_1_3);
    localStorage.setItem("c_list_2_1", c_list_2_1);
    localStorage.setItem("c_list_2_2", c_list_2_2);
    localStorage.setItem("c_list_2_3", c_list_2_3);
  };

  // ======== RETURN ========

  return (
    <div>
      <Hero />

      {/* ======== CONTENT SECTION ======== */}
      <main>
        <div className='wrapper'>
          <div className='mobile-wrapper'>
            {/* ======== FAVORITE ======== */}

            <section className='favorite'>
              <Pulse>
                <div className='category'>
                  <i className='fas fa-paint-brush-alt'></i>
                </div>
              </Pulse>
              <div className='small-wrapper'>
                <div className='favorite__content'>
                    <div className='title pb-s'>
                      <Fade bottom>
                        <h3 className='title-h3'>Some of my favorite work!</h3>
                      </Fade>
                      <Fade>
                        <div className='title-stroke'></div>
                      </Fade>
                    </div>
                  <div className='artwork'>
                    {APIData.map((data) => {
                      return (
                        <div key={data.id}>
                          {isAuthenticated && (
                            <div className='crud-button'>
                              <Link to='/home/update'>
                                <button className='edit' onClick={() => setData(data)}>
                                  Edit
                                </button>
                              </Link>
                            </div>
                          )}
                          <Fade bottom duration={1400}>
                            <img src={data.hl_image_1} alt='Artwork' />
                          </Fade>
                          <Fade bottom>
                            <h4 className='title-h4 pb-xs'>
                              {data.hl_title_1}
                            </h4>
                            <p className='paragraph'>{data.hl_text_1}</p>
                          </Fade>
                        </div>
                      );
                    })}
                  </div>
                  <div className='artwork'>
                    {APIData.map((data) => {
                      return (
                        <div key={data.id}>
                          <Fade bottom duration={1400}>
                            <img src={data.hl_image_2} alt='Artwork' />
                          </Fade>
                          <Fade bottom>
                            <h4 className='title-h4 pb-xs'>
                              {data.hl_title_2}
                            </h4>
                            <p className='paragraph'>{data.hl_text_2}</p>
                          </Fade>
                        </div>
                      );
                    })}
                  </div>
                  <Fade top>
                    <div className='cta'>
                      <Link to='/work' onClick={scrollTop}>
                        See more
                      </Link>
                      <i className='far fa-arrow-right'></i>
                    </div>
                  </Fade>
                </div>
              </div>
            </section>

            {/* ======== COMMISSION ======== */}

            <section className='commission'>
              <Pulse>
                <div className='category'>
                  <i className='fas fa-palette'></i>
                </div>
              </Pulse>
              <div className='small-wrapper'>
                <div className='commission__content'>
                  <div className='title pb-s'>
                    <Fade bottom>
                      <h3 className='title-h3'>I do commissions!</h3>
                    </Fade>
                    <Fade>
                      <div className='title-stroke'></div>
                    </Fade>
                  </div>

                  <Fade bottom>
                    <div className='card flex'>
                      <div className='image'>
                        <div className='image__box image-1'></div>
                      </div>
                      {APIData.map((data) => {
                        return (
                          <div className='content flex' key={data.id}>
                            <div className='title'>
                              <h4 className='title-h4 pb-s'>{data.c_title_1}</h4>
                              <p>${data.c_price_1}</p>
                            </div>
                            <div className='list'>
                              <ul className='paragraph'>
                                <li key='item-offer-1'>{data.c_list_1_1}</li>
                                <li key='item-offer-2'>{data.c_list_1_2}</li>
                                <li key='item-offer-3'>{data.c_list_1_3}</li>
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div className='card flex'>
                      <div className='image flex'>
                        <div className='image__box image-2'></div>
                      </div>
                      {APIData.map((data) => {
                        return (
                          <div className='content flex' key={data.id}>
                            <div className='title'>
                              <h4 className='title-h4 pb-s'>{data.c_title_2}</h4>
                              <p>${data.c_price_2}</p>
                            </div>
                            <div className='list'>
                              <ul className='paragraph'>
                                <li key='item-offer-4'>{data.c_list_2_1}</li>
                                <li key='item-offer-5'>{data.c_list_2_2}</li>
                                <li key='item-offer-6'>{data.c_list_2_3}</li>
                              </ul>
                            </div>
                          </div>
                        );
                      })}
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
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
