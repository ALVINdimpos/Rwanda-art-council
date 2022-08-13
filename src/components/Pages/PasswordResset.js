import React from "react";
import Style from "./LoginStyle.module.css";
import Button from "../Button/Index";
import { MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Index() {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const NewPasswordHandler = (e) => {
    SetEmail(e.target.value);
  };
  const NewPasswordComfirmHandler = (e) => {
    SetPassword(e.target.value);
  };
  const loginData = {
    code: Email,
    password:Password,
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
    const res=  await axios.post(
        "https://rwanda-art-api.herokuapp.com/api/password/reset",
        loginData
      );
      console.log(res)
      setLoading(false);
    } catch (error) {
      SetPassword("");
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className={Style.loginMainWraper}>
        <div className={Style.loginWraper}>
          <div>
            <h1>Password resset</h1>
          </div>
          <div className={Style.carddetails}>
          <input
              type={passwordShown ? "text" : "password"}
              id="password-input"
              placeholder="Enter your new password"
              onChange={NewPasswordHandler}
              required
            />
            <i className="fa fa-lock" />
            <span>
              <small className="fa fa-eye-slash passcode" onClick={togglePassword}/>
            </span>
          </div>
          <div className={Style.carddetails}>
            <input
              type={passwordShown ? "text" : "password"}
              id="password-input"
              placeholder="Comfirm your new  password"
              onChange={NewPasswordComfirmHandler}
              required
            />
            <i className="fa fa-lock" />
            <span>
              <small className="fa fa-eye-slash passcode" onClick={togglePassword}/>
            </span>
          </div>
          <div>
            <Button
              name={loading ? "loading..." : `Resset password`}
              onClick={loginHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
