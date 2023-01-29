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
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions";
import { API_URL, TOKEN, userData } from "../utils/config";

function Login(props) {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const state = useSelector((state) => state);
  const {
    login: { success, user },
  } = state;
  const adminRedirect = window.location.search
    ? window.location.search.split("=")[1]
    : "#/dashboard/federations";

  const fedRedirect = window.location.search
    ? window.location.search.split("=")[1]
    : "#/dashboard/union";

  const redirect = window.location.search
    ? window.location.search.split("=")[1]
    : "#/dashboard/artists";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  useEffect(() => {
    if (success && user.info?.fname && user.role) {
      // setLoading(false);
      // localStorage.setItem("user", JSON.stringify(user));
      if (user.role === "admin") {
        window.location.href = adminRedirect;
        window.location.reload(true);
      }
      if (user.role === "federation") {
        window.location.href = fedRedirect;
        window.location.reload(true);
      }
      if (user.role === "union") {
        window.location.href = redirect;
        window.location.reload(true);
      }
    }
  }, [user]);
  useEffect(() => {
    if (userData) {
      console.log(userData);
    }
  }, [userData]);

  const loginHandler = async (data) => {
    setLoading(true);
    Promise.resolve(dispatch(loginUser(data)))
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className={Style.loginMainWraper}>
      <div className={Style.loginWraper}>
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
