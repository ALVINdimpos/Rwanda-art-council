/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useState } from "react";
import Style from "./RestPassward.module.css";
import validator from "validator";
import axios from "axios";

function PasswordResset() {
  const [email, SetEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState("");
  const EmailHandler = (e) => {
    e.preventDefault();
    SetEmail(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      setLoading(true);
      try {
        const res = await axios.post(
          "https://api.rwandaartscouncil.rw/api/password-reset",
          { email }
        );
        console.log(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setValid("Please enter a valid email");
    }
    SetEmail("");
    setValid("");
  };
  useEffect(() => {
    submitHandler();
  }, []);
  return (
    <div
      className="container"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="row">
        <div className="col-md col-md-offset-4">
          <div className="panel panel-default">
            <div className="panel-body ">
              <div
                class="text-center"
                className={Style.textCenter}
                style={{
                  minHeight: "50vh",
                  paddingTop: "5rem",
                  backgroundColor: "white",
                  borderRadius: " 8px",
                  boxShadow: " 0px 4px 4px 0px #00000040",
                  padding: "2em",
                  width: "40%",
                  margin: " 1rem auto",
                }}
              >
                <h3>
                  <i className="fa fa-lock fa-4x" />
                </h3>
                <h2 className="text-center">Forgot Password?</h2>
                <p>You can reset your password here.</p>
                <div>
                  <form
                    id="register-form"
                    role="form"
                    autoComplete="off"
                    className="form"
                    method="post"
                  >
                    <div className="form-group">
                      <div className={Style.carddetails}>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          onChange={EmailHandler}
                          value={email}
                          required
                        />
                        <i className="fa fa-envelope" />
                      </div>
                      {valid && <p style={{ color: "red" }}>{valid}</p>}
                    </div>
                    <div className="form-group">
                      <input
                        name="recover-submit"
                        className="btn btn-lg btn- btn-block"
                        onClick={submitHandler}
                        type="submit"
                        value={loading ? "loading..." : `Reset password`}
                        style={{ backgroundColor: "#C5801A", color: "white" }}
                      />
                    </div>
                    <input
                      type="hidden"
                      className="hide"
                      name="token"
                      id="token"
                      defaultValue
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordResset;
