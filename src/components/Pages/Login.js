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
  const EmailHandler = (e) => {
    SetEmail(e.target.value);
  };
  const PasswordHandler = (e) => {
    SetPassword(e.target.value);
  };
  const loginData = {
    email: Email,
    password: Password,
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
    const res=  await axios.post(
        "https://rwanda-art-api.herokuapp.com/api/login",
        loginData
      );
      console.log(res)
      localStorage.setItem("token",res.data.access_token)
  
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
            <div>
              <Link to="/Home">
                <h4 style={{ color: "#c5801a" }}>
                  <MDBIcon fas icon="angle-left" /> Home
                </h4>
              </Link>
            </div>
          </div>
          <div>
            <h1>Sign in</h1>
          </div>
          <div className={Style.carddetails}>
            <input
              type="email"
              placeholder="Enter your name"
              onChange={EmailHandler}
              required
            />
            <i className="fa fa-envelope" />
          </div>
          <div className={Style.carddetails}>
            <input
              type={passwordShown ? "text" : "password"}
              id="password-input"
              placeholder="Enter your password"
              onChange={PasswordHandler}
              required
            />
            <i className="fa fa-lock" />
            <span>
              <small className="fa fa-eye-slash passcode" onClick={togglePassword}/>
            </span>
          </div>
          <div>
            <Button
              name={loading ? "loading..." : `Login`}
              onClick={loginHandler}
            />
      
          </div>
          <div>
            <p>
              Don’t have an account?
              <Link to="/Register">
                <span style={{ color: "#c5801a" }}>Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
