import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { useNavigate, Navigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import "semantic-ui-css/semantic.min.css";
import "../sass/app.scss";

export default function AboutUpdate() {
  const { isAuthenticated } = useAuth0();

  const [profile_image, set_profile_image] = useState("");
  const [about_text, set_about_text] = useState("");
  const [career_text, set_career_text] = useState("");

  const [id, setID] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem("id"));
    set_profile_image(localStorage.getItem("profile_image"));
    set_about_text(localStorage.getItem("about_text"));
    set_career_text(localStorage.getItem("career_text"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://61a3ed8fd5e83300172921dd.mockapi.io/about/${id}`, {
        profile_image,
        about_text,
        career_text,
      })
      .then(() => {
        window.scrollTo(0, 0);
        navigate("/about");
      });
  };

  if (isAuthenticated) {
    return (
      <div className='main'>
        <Form className='create-form'>
          <Form.Field>
            <label>Profile image</label>
            <input
              placeholder='Image URL'
              value={profile_image}
              onChange={(e) => set_profile_image(e.target.value)}
            />
          </Form.Field>
          <div className='crud-group'>
            <Form.Field>
              <label>About text</label>
              <textarea
                placeholder='About story'
                value={about_text}
                cols='100'
                rows='10'
                onChange={(e) => set_about_text(e.target.value)}
              ></textarea>
            </Form.Field>
            <Form.Field>
              <label>Career text</label>
              <textarea
                placeholder='Career story'
                value={career_text}
                cols='100'
                rows='10'
                onChange={(e) => set_career_text(e.target.value)}
              ></textarea>
            </Form.Field>
          </div>
          <Button onClick={updateAPIData} type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    );
  } else {
    return <Navigate replace to='/admin' />;
  }
}
