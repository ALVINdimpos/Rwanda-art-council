/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Style from "./LoginStyle.module.css";
import Button from "../components/Button/Index";
import { MDBIcon } from "mdbreact";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import validator from "validator";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { loginUser } from "../redux/actions";
import { API_URL, TOKEN } from "../utils/config";

function Login() {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  // const state = useSelector((state) => state);
  // const {
  //   login: { success, error },
  // } = state;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  // useEffect(() => {
  //   if (success) {
  //   }
  // }, []);

  const loginHandler = async (data) => {
    console.log(data);
    try {
      await axios
        .post(`${API_URL}/User/Login`, data)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));

          navigation("/dashboard");
        })
        .catch((err) => {
          console.error(err);
        });
      // console.log(res.status);
      // if (res.status === 200 && res.data) {
      //   console.log(res);
      // }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
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
        <form onSubmit={handleSubmit(loginHandler)}>
          <div className={Style.carddetails}>
            <input
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            <i className="fa fa-envelope" />
          </div>
          {errors.email && <p style={{ color: "red" }}>Email is required</p>}
          <div className={Style.carddetails}>
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            <i className="fa fa-lock" />
            <span>
              <small
                className="fa fa-eye-slash passcode"
                onClick={togglePassword}
              />
            </span>
          </div>
          {errors.password && (
            <p style={{ color: "red" }}>Password is required</p>
          )}
          <div className={Style.loginForgot}>
            <Button
              name={loading ? "loading..." : `Login`}
              onClick={loginHandler}
            />
          </div>
          {/* <button type="submit" className={Style.loginBtn}>
            LOGIN
          </button> */}
        </form>
        <Link to="/ForgotPassward">
          <span style={{ color: "#c5801a" }}>Forgot password?</span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
