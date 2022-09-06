/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Style from "./LoginStyle.module.css";
import Button from "../Button/Index";
import { MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const showToastMessage = () => {
    toast.success("Login Successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
  
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });}
  const loginData = {
    email: Email,
    password: Password,
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    showToastMessage();
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
  useEffect(()=>{
loginHandler();

  },[])
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
          <div className={Style.loginForgot}>
            
            <Button
              name={loading ? "loading..." : `Login`}
              onClick={loginHandler}
            />
            <Link to="/ForgotPassward">
                <span style={{ color: "#c5801a" }}>Forgot password?</span>
              </Link>
           <ToastContainer />
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
