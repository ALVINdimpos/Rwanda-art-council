import React from "react";
import NavBar from "../NavBar/Index";
import Style from "./LoginStyle.module.css";
import Button from "../Button/Index";
import { MDBIcon } from "mdbreact";
import { MDBInput } from "mdb-react-ui-kit";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
function Index() {
  const [Email,SetEmail]=useState('');
  const [Password,SetPassword]=useState('');
  const EmailHandler=(e)=>{
    SetEmail(e.target.value);
  }
  const PasswordHandler=(e)=>{
    SetPassword(e.target.value);
  }
  return (
    <>
      <NavBar />
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
          <div>
            <MDBInput
              id="typeText"
              type="email"
              placeholder="Enter your email"
              onChange={EmailHandler}
            />
          </div>
          <div>
            <MDBInput id="typeText" type="password" placeholder="Password"  onChange={PasswordHandler}/>
          </div>
          <div>
            {" "}
            <Button name="Login" />
          </div>
          <div>
            <p>
            Don’t have an account?<Link to='/Register' >
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
