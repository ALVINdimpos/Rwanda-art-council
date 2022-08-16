import React from "react";
import Style from "./Style.module.css";
import { useState } from "react";
import axios from "axios";
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
        url: "https://rwanda-art-api.herokuapp.com/api/booking/create/{event_id}",
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
      <div className={Style.loginWraper}>
        <div className={Style.carddetails}>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={emailHandler}
            value={email}
            required
          />
          <i className="fa fa-envelope" />
        </div>
        <div className={Style.carddetails}>
          <input
            type="phone"
            id="phonenumber-input"
            placeholder="Enter your phone number"
            onChange={Phone_numberHander}
            value={Phone_number}
            required
          />
          <i className="fa fa-phone" />
        </div>
        <div className="form-group">
          <input
            name="recover-submit"
            className="btn btn-lg  btn-block"
            onClick={submitHandler}
            type="submit"
            value={loading ? "loading..." : `Book now`}
            style={{ backgroundColor: "#C5801A", color: "white" }}
          />
        </div>
      </div>
    </>
  );
}

export default Index;
