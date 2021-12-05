import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { useNavigate, Navigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import "semantic-ui-css/semantic.min.css";
import "../sass/app.scss";

export default function CityUpdate() {
  const { isAuthenticated } = useAuth0();

  const [city_location, set_city_location] = useState("");

  const [id, setID] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem("id"));
    set_city_location(localStorage.getItem("city_location"));
  }, []);

  const updateCityAPIData = () => {
    axios
      .put(`https://61a3ed8fd5e83300172921dd.mockapi.io/city/${id}`, {
        city_location,
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
            <label>City location</label>
            <input
              placeholder='City'
              value={city_location}
              onChange={(e) => set_city_location(e.target.value)}
            />
          </Form.Field>
          <Button onClick={updateCityAPIData} type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    );
  } else {
    return <Navigate replace to='/admin' />;
  }
}
