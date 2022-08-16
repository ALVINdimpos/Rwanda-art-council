import React,{ useRef }  from "react";
import NavBar from "../NavBar/Index";
import Partner from "../box/partners/Index";
import Footer from "../Footer/Footer";
import Style from "./ContactusStyle.module.css";
import Button from "../Button/Index";
import PageIndicator from "../PageIndicator/Index";
import { MDBIcon } from "mdbreact";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
function Index() {
  return (
    <>
      {" "}
      <NavBar />
      <PageIndicator name="Contact us" />
      <div className={Style.loginMainWraper}>
        <div className={Style.mapouter}>
          <div className="gmap_canvas">
            <iframe
              width={1000}
              height={500}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Rwanda%20art%20council&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder={0}
              scrolling="no"
            />
          </div>
        </div>
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
            <MDBTextArea id="textAreaExample" rows={4} />
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
