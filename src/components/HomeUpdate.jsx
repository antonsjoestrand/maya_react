import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { useNavigate, Navigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import "semantic-ui-css/semantic.min.css";
import "../sass/app.scss";

export default function HomeUpdate() {
  const { isAuthenticated } = useAuth0();

  const [hl_image_1, set_hl_image_1] = useState("");
  const [hl_title_1, set_hl_title_1] = useState("");
  const [hl_text_1, set_hl_text_1] = useState("");
  const [hl_image_2, set_hl_image_2] = useState("");
  const [hl_title_2, set_hl_title_2] = useState("");
  const [hl_text_2, set_hl_text_2] = useState("");
  const [c_title_1, set_c_title_1] = useState("");
  const [c_price_1, set_c_price_1] = useState("");
  const [c_title_2, set_c_title_2] = useState("");
  const [c_price_2, set_c_price_2] = useState("");
  const [c_list_1_1, set_c_list_1_1] = useState("");
  const [c_list_1_2, set_c_list_1_2] = useState("");
  const [c_list_1_3, set_c_list_1_3] = useState("");
  const [c_list_2_1, set_c_list_2_1] = useState("");
  const [c_list_2_2, set_c_list_2_2] = useState("");
  const [c_list_2_3, set_c_list_2_3] = useState("");

  const [id, setID] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem("id"));
    set_hl_image_1(localStorage.getItem("hl_image_1"));
    set_hl_title_1(localStorage.getItem("hl_title_1"));
    set_hl_text_1(localStorage.getItem("hl_text_1"));
    set_hl_image_2(localStorage.getItem("hl_image_2"));
    set_hl_title_2(localStorage.getItem("hl_title_2"));
    set_hl_text_2(localStorage.getItem("hl_text_2"));
    set_c_title_1(localStorage.getItem("c_title_1"));
    set_c_price_1(localStorage.getItem("c_price_1"));
    set_c_title_2(localStorage.getItem("c_title_2"));
    set_c_price_2(localStorage.getItem("c_price_2"));
    set_c_list_1_1(localStorage.getItem("c_list_1_1"));
    set_c_list_1_2(localStorage.getItem("c_list_1_2"));
    set_c_list_1_3(localStorage.getItem("c_list_1_3"));
    set_c_list_2_1(localStorage.getItem("c_list_2_1"));
    set_c_list_2_2(localStorage.getItem("c_list_2_2"));
    set_c_list_2_3(localStorage.getItem("c_list_2_3"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://61a3ed8fd5e83300172921dd.mockapi.io/home/${id}`, {
        hl_image_1,
        hl_title_1,
        hl_text_1,
        hl_image_2,
        hl_title_2,
        hl_text_2,
        c_title_1,
        c_price_1,
        c_title_2,
        c_price_2,
        c_list_1_1,
        c_list_1_2,
        c_list_1_3,
        c_list_2_1,
        c_list_2_2,
        c_list_2_3,
      })
      .then(() => {
        window.scrollTo(0, 0);
        navigate("/");
      });
  };

  if (isAuthenticated) {
    return (
      <div className='main'>
        <Form className='create-form'>
          <Form.Field>
            <label>Highlighted image 1</label>
            <input
              placeholder='Image URL'
              value={hl_image_1}
              onChange={(e) => set_hl_image_1(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Highlighted title 1</label>
            <input
              placeholder='Artwork title'
              value={hl_title_1}
              onChange={(e) => set_hl_title_1(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Highlighted text 1</label>
            <textarea
              placeholder='Artwork description'
              value={hl_text_1}
              cols='100'
              rows='10'
              onChange={(e) => set_hl_text_1(e.target.value)}
            ></textarea>
          </Form.Field>
          <div className='crud-group'>
            <Form.Field>
              <label>Highlighted image 2</label>
              <input
                placeholder='Image URL'
                value={hl_image_2}
                onChange={(e) => set_hl_image_2(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Highlighted title 2</label>
              <input
                placeholder='Artwork title'
                value={hl_title_2}
                onChange={(e) => set_hl_title_2(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Highlighted text 2</label>
              <textarea
                placeholder='Artwork description'
                value={hl_text_2}
                cols='100'
                rows='10'
                onChange={(e) => set_hl_text_2(e.target.value)}
              ></textarea>
            </Form.Field>
          </div>
          <div className='crud-group'>
            <Form.Field>
              <label>Commission title 1</label>
              <input
                placeholder='Title'
                value={c_title_1}
                onChange={(e) => set_c_title_1(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Commission price 1</label>
              <input
                placeholder='Price'
                value={c_price_1}
                onChange={(e) => set_c_price_1(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Commission list item</label>
              <input
                placeholder='List offer'
                value={c_list_1_1}
                onChange={(e) => set_c_list_1_1(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Commission list item</label>
              <input
                placeholder='List offer'
                value={c_list_1_2}
                onChange={(e) => set_c_list_1_2(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Commission list item</label>
              <input
                placeholder='List offer'
                value={c_list_1_3}
                onChange={(e) => set_c_list_1_3(e.target.value)}
              />
            </Form.Field>
          </div>
          <div className='crud-group'>
            <Form.Field>
              <label>Commission title 2</label>
              <input
                placeholder='Title'
                value={c_title_2}
                onChange={(e) => set_c_title_2(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Commission price 2</label>
              <input
                placeholder='Price'
                value={c_price_2}
                onChange={(e) => set_c_price_2(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Commission list item</label>
              <input
                placeholder='List offer'
                value={c_list_2_1}
                onChange={(e) => set_c_list_2_1(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Commission list item</label>
              <input
                placeholder='List offer'
                value={c_list_2_2}
                onChange={(e) => set_c_list_2_2(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Commission list item</label>
              <input
                placeholder='List offer'
                value={c_list_2_3}
                onChange={(e) => set_c_list_2_3(e.target.value)}
              />
            </Form.Field>
          </div>
          <Button onClick={updateAPIData} type='submit'>
            Update
          </Button>
        </Form>
      </div>
    );
  } else {
    return <Navigate replace to='/admin' />;
  }
}
