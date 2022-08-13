import React from "react";
import Style from "./Style.module.css";
import { MDBInput } from "mdb-react-ui-kit";
import Button from "../../Button/Index";
import { MDBIcon } from "mdbreact";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Index() {
  const [email, SetEmail] = useState();
  const [Phone_number, SetPhone_number] = useState();
  const [loading, setLoading] = useState(false);
  const emailHandler = (e) => {
    SetEmail(e.target.value);
  };
  const Phone_numberHander = (e) => {
    SetPhone_number(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios({
        url: "https://rwanda-art-api.herokuapp.com/api/password/email",
        data: { email, Phone_number },
        method: "POST",
      });
      console.log(res);
      setLoading(false);
    } catch (error) {
      SetEmail("");
      console.log(error);
      setLoading(false);
    }
  };
  console.log(email);
  return (
    <>
      <div className={Style.EventCardWraper}>
        <div className={Style.EventCard}>
          <div>
            <Link to="/Event">
              <MDBIcon fas icon="times" />
            </Link>
            <MDBInput
              id="typeText"
              type="email"
              placeholder="Enter your email"
              onChange={emailHandler}
              value={email}
            />
          </div>
          <div>
            <MDBInput
              id="typeText"
              type="text"
              placeholder="Phone number"
              onChange={Phone_numberHander}
              value={Phone_number}
            />
          </div>
          <div>
            <Button
              name={loading ? "Loading..." : `Book now`}
              onClick={submitHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
