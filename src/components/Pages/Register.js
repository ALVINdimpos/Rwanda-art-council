import React from "react";
import NavBar from "../NavBar/Index";
import Partner from "../box/partners/Index";
import Footer from "../Footer/Footer";
import Style from "./LoginStyle.module.css";
import Button from "../Button/Index";
import { MDBIcon } from "mdbreact";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBFile } from "mdb-react-ui-kit";

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
            <h2>Create a new account</h2>
          </div>
          <div>
            <MDBInput id="typeText" type="text" placeholder="Federation_name" />
          </div>
          <div>
            <MDBInput id="typeText" type="number" placeholder="Phone_number" />
          </div>
          <div>
            <MDBInput id="typeText" type="number" placeholder="Tin_number" />
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
              type="number"
              placeholder="Number_of_members"
            /></div>
            <div>
              <select class="browser-default custom-select">
                <option selected>Select category</option>
                <option value="1">PLASTIC ARTS</option>
                <option value="2">MUSIC & DANCE</option>
                <option value="3">ACTING & DRAMA</option>
                <option value="3">CINEMATOGRAPHY & PHOTOGRAPHY</option>
                <option value="3">LITERATURE</option>
                <option value="3">FASHION</option>
              </select>
            </div>
            <div>
              <select class="browser-default custom-select">
                <option selected>Select cluster</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          
          <div>
            <MDBInput id="typeText" type="password" placeholder="Password" />
          </div>
          <div>
            <MDBInput
              id="typeText"
              type="password"
              placeholder="Confirm password"
            />
          </div>

          <div>
            <MDBFile label="Upload file" id="customFile" />
          </div>
          <div>
            {" "}
            <Button name="Sign up" />
          </div>
          <div>
            <p>
              Already have an account?
              <span style={{ color: "#c5801a" }}>Sign in</span>
            </p>
          </div>
        </div>
      </div>

      <Partner />
      <Footer />
    </>
  );
}

export default Index;
