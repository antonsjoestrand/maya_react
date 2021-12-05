import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { useNavigate, Navigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import "semantic-ui-css/semantic.min.css";
import "../sass/app.scss";

export default function WorkCreate() {
  const { isAuthenticated } = useAuth0();

  const [big_image, set_big_image] = useState("");
  const [big_image_title, set_big_image_title] = useState("");
  const [small_image, set_small_image] = useState("");
  const [small_image_text, set_small_image_text] = useState("");
  const [small_image_title, set_small_image_title] = useState("");

  let navigate = useNavigate();

  const postData = () => {
    axios
      .post(`https://61a3ed8fd5e83300172921dd.mockapi.io/work`, {
        big_image,
        big_image_title,
        small_image,
        small_image_text,
        small_image_title,
      })
      .then(() => {
        navigate("/work");
      });
  };

  if (isAuthenticated) {
    return (
      <div className='main'>
        <Form className='create-form'>
          <Form.Field>
            <label>Big image</label>
            <input
              placeholder='Image URL'
              onChange={(e) => set_big_image(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Big image title</label>
            <input
              placeholder='Artwork title'
              onChange={(e) => set_big_image_title(e.target.value)}
            />
          </Form.Field>
          <div className='crud-group'>
            <Form.Field>
              <label>Small image</label>
              <input
                placeholder='Image URL'
                onChange={(e) => set_small_image(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Small image text</label>
              <textarea
                placeholder='Artwork story'
                cols='100'
                rows='10'
                onChange={(e) => set_small_image_text(e.target.value)}
              ></textarea>
            </Form.Field>
            <Form.Field>
              <label>Small image title</label>
              <input
                placeholder='Artwork title'
                onChange={(e) => set_small_image_title(e.target.value)}
              />
            </Form.Field>
          </div>
          <Button onClick={postData} type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    );
  } else {
    return <Navigate replace to='/admin' />;
  }
}
