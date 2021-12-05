import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { useNavigate, Navigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import "semantic-ui-css/semantic.min.css";
import "../sass/app.scss";

export default function SkillCreate() {
  const { isAuthenticated } = useAuth0();

  const [skill, set_skill] = useState("");

  let navigate = useNavigate();

  const postData = () => {
    axios
      .post(`https://61a3ed8fd5e83300172921dd.mockapi.io/skills`, {
        skill,
      })
      .then(() => {
        window.scrollTo(0, 0);
        navigate("/about");
      });
  };

  if (isAuthenticated) {
    return (
      <div className='main admin'>
        <Form className='create-form'>
          <Form.Field>
            <label>Skill</label>
            <input
              placeholder='Skill'
              onChange={(e) => set_skill(e.target.value)}
            />
          </Form.Field>
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
