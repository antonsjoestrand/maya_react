import React, { useState, useCallback, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Link } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";
import "../sass/app.scss";
import NavBar from "./NavBar/NavBar.jsx";
import Header from "./Header/Header.jsx";

export default function Work() {
  document.title = "Work - Maya Sorvala";

  const { isAuthenticated } = useAuth0();

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  // ======== CRUD OPERATIONS ========
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://61a3ed8fd5e83300172921dd.mockapi.io/work`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    window.scrollTo(0, 0);

    let {
      id,
      big_image,
      big_image_title,
      small_image,
      small_image_text,
      small_image_title,
    } = data;
    localStorage.setItem("id", id);
    localStorage.setItem("big_image", big_image);
    localStorage.setItem("big_image_title", big_image_title);
    localStorage.setItem("small_image", small_image);
    localStorage.setItem("small_image_text", small_image_text);
    localStorage.setItem("small_image_title", small_image_title);
  };

  const getData = () => {
    axios
      .get(`https://61a3ed8fd5e83300172921dd.mockapi.io/work`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://61a3ed8fd5e83300172921dd.mockapi.io/work/${id}`)
      .then(() => {
        getData();
      });
  };

  // ======== IMAGE HANDLING ========
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const images = APIData.map((data) => {
    return data.big_image;
  });

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      <div className='background-alt'>
        <div className='wrapper'>
          <NavBar />

          <Header name='My Artwork' />
        </div>
      </div>

      <main>
        {/* ======== GALLERY ======== */}

        <section className='gallery'>
          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}

          {APIData.map((data) => {
            return (
              <div key={data.id}>
                <div className='wrapper'>
                  {isAuthenticated && (
                    <div className='crud-button'>
                      <Link to='/work/update'>
                        <button className='edit' onClick={() => setData(data)}>
                          Edit
                        </button>
                      </Link>
                      <button
                        className='delete'
                        onClick={() => onDelete(data.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
                <div
                  className='gallery__big'
                  style={{ backgroundImage: `url("${data.big_image}")` }}
                  onClick={() => openImageViewer()}
                >
                  <div className='wrapper'>
                    <div className='mobile-wrapper'>
                      <div className='name flex'>
                        <h4 className='title-h4'>{data.big_image_title}</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='wrapper'>
                  <div className='mobile-wrapper'>
                    <div className='gallery__small'>
                      <div className='artwork flex'>
                        <img src={data.small_image} alt='Ogres' />
                      </div>
                      <div className='text flex'>
                        <p>
                          {data.small_image_text} "
                          <span>{data.small_image_title}</span>"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className='wrapper'>
            {isAuthenticated && (
              <Link to='/work/create'>
                <button className='add' onClick={scrollTop}>Add projects</button>
              </Link>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
