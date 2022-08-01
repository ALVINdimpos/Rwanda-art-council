import React from "react";
import NavBar from "../NavBar/Index";
import Partner from "../box/partners/Index";
import Footer from "../Footer/Footer";
import Style from "./LoginStyle.module.css";
import Button from "../Button/Index";
import { MDBIcon } from "mdbreact";
import { MDBInput } from "mdb-react-ui-kit";

function Index() {
  return (
    <>
      <NavBar />
      <div className={Style.loginMainWraper}>
      <div className={Style.loginWraper}>
        <div>
          <div>
            <h4 style={{color:"#c5801a"}}><MDBIcon fas icon="angle-left" />Home</h4>
          </div>
        </div>
        <div>
          <h1>Sign in</h1>
        </div>
        <div>
          <p>Sign up on the internal platform</p>
        </div>
        <div className={Style.loginButtonWraper}>
          <div >
            <Button name="Login with facebook" />
          </div>
          <div>
            <Button name="Login with google" />
          </div>
        </div>
        <div>
          <p>or login with email address</p>
        </div>
        <div>
          <MDBInput
            id="typeText"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <MDBInput
            id="typeText"
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          {" "}
          <Button name="Login" />
        </div>
        <div>
          <p>Don’t have an account?<span style={{color:"#c5801a"}}>Sign up</span></p> 
        </div>
      </div>
      </div>
    
      <Partner />
      <Footer />
    </>
  );
}

export default Index;
