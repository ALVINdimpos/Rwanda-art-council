import React from "react";
import NavBar from "../NavBar/Index";
import Partner from "../box/partners/Index";
import Footer from "../Footer/Footer";
import Style from "./ContactusStyle.module.css";
import Button from "../Button/Index";
import { MDBIcon } from "mdbreact";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";

function Index() {
  return (
    <>
      <NavBar />
      <div className={Style.loginMainWraper}>
        <div className={Style.loginWraper}>
          <div>
            <div>
              <h4 style={{ color: "#c5801a" }}>
                <MDBIcon fas icon="angle-left" />
                Home
              </h4>
            </div>
          </div>
          <div>
            <h1>Get In Touch</h1>
          </div>
          <div>
            <p>We are here for you! How can we help you?</p>
          </div>
          <div>
            <MDBInput
              id="typeText"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <MDBTextArea  id="textAreaExample" rows={4} />
          </div>
          <div>
            <Button name="Send email" />
          </div>
        </div>
      </div>

      <Partner />
      <Footer />
    </>
  );
}

export default Index;
