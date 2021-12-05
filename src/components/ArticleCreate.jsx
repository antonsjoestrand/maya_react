import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { useNavigate, Navigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import "semantic-ui-css/semantic.min.css";
import "../sass/app.scss";

export default function ArticleCreate() {
  const { isAuthenticated } = useAuth0();

  const [article_type, set_article_type] = useState("");
  const [article_publisher, set_article_publisher] = useState("");
  const [article_title, set_article_title] = useState("");
  const [article_link, set_article_link] = useState("");

  let navigate = useNavigate();

  const postData = () => {
    axios
      .post(`https://61a3ed8fd5e83300172921dd.mockapi.io/articles`, {
        article_type,
        article_publisher,
        article_title,
        article_link,
      })
      .then(() => {
        window.scrollTo(0, 0);
        navigate("/accolades");
      });
  };

  if (isAuthenticated) {
    return (
      <div className='main'>
        <Form className='create-form article-form'>
          <Form.Field>
            <label>Article type</label>
            <input
              placeholder='Type'
              onChange={(e) => set_article_type(e.target.value)}
            />
          </Form.Field>
          <div className='crud-group'>
            <Form.Field>
              <label>Article publisher</label>
              <input
                placeholder='Publisher'
                onChange={(e) => set_article_publisher(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Article title</label>
              <input
                placeholder='Title'
                onChange={(e) => set_article_title(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Article link</label>
              <input
                placeholder='URL'
                onChange={(e) => set_article_link(e.target.value)}
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
