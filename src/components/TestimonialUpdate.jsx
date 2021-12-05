import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { useNavigate, Navigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import "semantic-ui-css/semantic.min.css";
import "../sass/app.scss";

export default function TestimonialUpdate() {
  const { isAuthenticated } = useAuth0();

  const [testimonial_name, set_testimonial_name] = useState("");
  const [testimonial_text, set_testimonial_text] = useState("");

  const [id, setID] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem("id"));
    set_testimonial_name(localStorage.getItem("testimonial_name"));
    set_testimonial_text(localStorage.getItem("testimonial_text"));
  }, []);

  const updateTestimonialAPIData = () => {
    axios
      .put(`https://61a3ed8fd5e83300172921dd.mockapi.io/testimonials/${id}`, {
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
              value={testimonial_name}
              onChange={(e) => set_testimonial_name(e.target.value)}
            />
          </Form.Field>
          <div className='crud-group'>
            <Form.Field>
              <label>Testimonial text</label>
              <textarea
                placeholder='Text'
                value={testimonial_text}
                cols='100'
                rows='10'
                onChange={(e) => set_testimonial_text(e.target.value)}
              ></textarea>
            </Form.Field>
          </div>
          <Button onClick={updateTestimonialAPIData} type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    );
  } else {
    return <Navigate replace to='/admin' />;
  }
}
