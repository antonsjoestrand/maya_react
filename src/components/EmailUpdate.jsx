import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { useNavigate, Navigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import "semantic-ui-css/semantic.min.css";
import "../sass/app.scss";

export default function EmailUpdate() {
  const { isAuthenticated } = useAuth0();

  const [email_address, set_email_address] = useState("");

  const [id, setID] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem("id"));
    set_email_address(localStorage.getItem("email_address"));
  }, []);

  const updateEmailAPIData = () => {
    axios
      .put(`https://61a3ed8fd5e83300172921dd.mockapi.io/email/${id}`, {
        email_address,
      })
      .then(() => {
        window.scrollTo(0, 0);
        navigate("/contact");
      });
  };

  if (isAuthenticated) {
    return (
      <div className='main admin'>
        <Form className='create-form'>
          <Form.Field>
            <label>Email address</label>
            <input
              placeholder='Email'
              value={email_address}
              onChange={(e) => set_email_address(e.target.value)}
            />
          </Form.Field>
          <Button onClick={updateEmailAPIData} type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    );
  } else {
    return <Navigate replace to='/admin' />;
  }
}
