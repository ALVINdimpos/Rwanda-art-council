/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Style from "./LoginStyle.module.css";
import Button from "../components/Button/Index";
import { useState } from "react";
import axios from "axios";
function Index() {
  const [verificatonCode, setVerficationCode] = useState("");
  const [Password, SetPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const verificatonCodeHandler = (e) => {
    setVerficationCode(e.target.value);
  };
  const NewPasswordComfirmHandler = (e) => {
    SetPassword(e.target.value);
  };
  const resetData = {
    code: verificatonCode,
    password:Password,
  };
  const resetHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
    const res=  await axios.post(
        "https://rwanda-art-api.herokuapp.com/api/password/reset",
        resetData
      );
      console.log(res)
      setLoading(false);
    } catch (error) {
      SetPassword("");
      console.log(error);
      setLoading(false);
    }
  };
useEffect(()=>{
  resetHandler();
},[])
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
              placeholder="Enter verification code here"
              onChange={verificatonCodeHandler}
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
              placeholder="Enter new  password"
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
              onClick={resetHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
