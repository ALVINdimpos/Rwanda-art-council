/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Style from "./LoginStyle.module.css";
import Button from "../Button/Index";
import { useNavigate } from "react-router-dom";
import { MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";
import axios from "axios";

function Index() {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [emaiValid, setEmailValid] = useState("");
  const [passwordValid, setPasswordValid] = useState("");
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
    if (validator.isEmail(Email)) {
      setEmailValid("");
    } else {
      setEmailValid("Please enter a valid email");
    }
    if (Password.length < 8) {
      setPasswordValid("Password must be 8 characters long");
    } else {
      setPasswordValid("");
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://rwanda-art-api.herokuapp.com/api/login",
        loginData
      );
      if (res.status === 200) {
        toast.success("Login successful");
        console.log(res);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    SetEmail("");
    SetPassword("");
    setEmailValid("");
    setPasswordValid("");
    setLoading(false);
  };
  useEffect(() => {
    loginHandler();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div className={Style.loginMainWraper}>
        <div className={Style.loginWraper}>
          <form>
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
              />
              <i className="fa fa-envelope" />
            </div>
            {emaiValid && <p style={{ color: "red" }}>{emaiValid}</p>}
            <div className={Style.carddetails}>
              <input
                type={passwordShown ? "text" : "password"}
                id="password-input"
                placeholder="Enter your password"
                onChange={PasswordHandler}
                value={Password}
              />
              <i className="fa fa-lock" />
              <span>
                <small
                  className="fa fa-eye-slash passcode"
                  onClick={togglePassword}
                />
              </span>
            </div>
            <div>
              {" "}
              <Button name="Login" onClick={() => navigate("/logindash")} />
            </div>
            <div>
              <p>Don’t have an account?</p>
              <Link to="/Register">
                <span style={{ color: "#c5801a" }}>Sign up</span>
              </Link>
              <ToastContainer />
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Index;
