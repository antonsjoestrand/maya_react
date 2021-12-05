import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { useNavigate, Navigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import "semantic-ui-css/semantic.min.css";
import "../sass/app.scss";

export default function PhoneUpdate() {
  const { isAuthenticated } = useAuth0();

  const [phone_number, set_phone_number] = useState("");

  const [id, setID] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem("id"));
    set_phone_number(localStorage.getItem("phone_number"));
  }, []);

  const updatePhoneAPIData = () => {
    axios
      .put(`https://61a3ed8fd5e83300172921dd.mockapi.io/phone/${id}`, {
        phone_number,
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
            <label>Phone number</label>
            <input
              placeholder='Number'
              value={phone_number}
              onChange={(e) => set_phone_number(e.target.value)}
            />
          </Form.Field>
          <Button onClick={updatePhoneAPIData} type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    );
  } else {
    return <Navigate replace to='/admin' />;
  }
}
