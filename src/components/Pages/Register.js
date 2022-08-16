import React from "react";
import NavBar from "../NavBar/Index";
import Style from "./RegisterStyle.module.css";
import Button from "../Button/Index";
import { MDBIcon } from "mdbreact";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBFile } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Index() {
  return (
    <>
      <NavBar />
      <div className={Style.registerMainWraper}>
        <div className={Style.registerWraper}>
          <div>
            <div>
              <Link to="/Home">
                {" "}
                <h4 style={{ color: "#c5801a" }}>
                  <MDBIcon fas icon="angle-left" />
                  Home
                </h4>
              </Link>
            </div>
          </div>
          <div>
            <h2>Create a new account</h2>
          </div>
          <div>
            <MDBInput id="typeText" type="text" placeholder="Federation_name" />
          </div>
          <div>
            <MDBInput id="typeText" type="text" placeholder="Phone_number" />
          </div>
          <div>
            <MDBInput id="typeText" type="text" placeholder="Tin_number" />
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
            />
          </div>
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
            <select name="" id="cars" class="browser-default custom-select">
              <optgroup label="PLASTIC ARTS">
                <option selected>Select cluster</option>
                <option value="Illustrators">Illustrators</option>
                <option value="Painters">Painters</option>
                <option value="Sculptors">Sculptors</option>
              </optgroup>
              <optgroup label="MUSIC & DANCE">
                <option value="Singing">Singing</option>
                <option value="Dancing">Dancing</option>
                <option value="Instruments">Instruments</option>
                <option value="Composing">Composing</option>
              </optgroup>
              <optgroup label="FASHION">
                <option value="mercedes">Design</option>
              </optgroup>
              <optgroup label="ACTING & DRAMA">
                <option value="mercedes">Stage Acting</option>
                <option value="Film Acting">Film Acting</option>
                <option value="Comedy">Comedy</option>
              </optgroup>
              <optgroup label="CINEMATOGRAPHY & PHOTOGRAPHY">
                <option value="Photography">Photography</option>
                <option value="Filming">Filming</option>
                <option value="Animation">Animation</option>
              </optgroup>
              <optgroup label="LITERATURE">
                <option value="Writing">Writing</option>
                <option value="Poetry">Poetry</option>
              </optgroup>
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
              Already have an account?{" "}
              <Link to="/Login">
                <span style={{ color: "#c5801a" }}>Sign in</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
