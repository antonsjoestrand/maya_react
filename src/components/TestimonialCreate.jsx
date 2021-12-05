import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { useNavigate, Navigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import "semantic-ui-css/semantic.min.css";
import "../sass/app.scss";

export default function TestimonialCreate() {
  const { isAuthenticated } = useAuth0();

  const [testimonial_name, set_testimonial_name] = useState("");
  const [testimonial_text, set_testimonial_text] = useState("");

  let navigate = useNavigate();

  const postData = () => {
    axios
      .post(`https://61a3ed8fd5e83300172921dd.mockapi.io/testimonials`, {
        testimonial_name,
        testimonial_text,
      })
      .then(() => {
        window.scrollTo(0, 0);
        navigate("/accolades");
      });
  };

  if (isAuthenticated) {
    return (
      <div className='main'>
        <Form className='create-form'>
          <Form.Field>
            <label>Testimonial name</label>
            <input
              placeholder='Name'
              onChange={(e) => set_testimonial_name(e.target.value)}
            />
          </Form.Field>
          <div className='crud-group'>
            <Form.Field>
              <label>Testimonial text</label>
              <textarea
                placeholder='Text'
                cols='100'
                rows='10'
                onChange={(e) => set_testimonial_text(e.target.value)}
              ></textarea>
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
