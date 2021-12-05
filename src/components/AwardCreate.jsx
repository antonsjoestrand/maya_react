import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { useNavigate, Navigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import "semantic-ui-css/semantic.min.css";
import "../sass/app.scss";

export default function AwardCreate() {
  const { isAuthenticated } = useAuth0();

  const [award_type, set_award_type] = useState("");
  const [award_title, set_award_title] = useState("");
  const [award_text, set_award_text] = useState("");
  const [award_link, set_award_link] = useState("");

  let navigate = useNavigate();

  const postData = () => {
    axios
      .post(`https://61a3ed8fd5e83300172921dd.mockapi.io/awards`, {
        award_type,
        award_title,
        award_text,
        award_link,
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
            <label>Award type</label>
            <input
              placeholder='Type'
              onChange={(e) => set_award_type(e.target.value)}
            />
          </Form.Field>
          <div className='crud-group'>
            <Form.Field>
              <label>Award title</label>
              <input
                placeholder='Title'
                onChange={(e) => set_award_title(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Award text</label>
              <textarea
                placeholder='Short description'
                cols='100'
                rows='10'
                onChange={(e) => set_award_text(e.target.value)}
              ></textarea>
            </Form.Field>
            <Form.Field>
              <label>Award link</label>
              <input
                placeholder='URL'
                onChange={(e) => set_award_link(e.target.value)}
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
