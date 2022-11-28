/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar/Index";
import Footer from "../components/Footer/Footer";
import PageIndicator from "../components/PageIndicator/Index";
import FidImage from "../assets/photos/Back3.jpg";
import { useState } from "react";
import {useLocation} from "react-router-dom";
import "./Federation.css";

const Federation = () => {
  const {state} = useLocation();
  const [Fid, setFid] = useState(state.data);
  return (
    <>
      <NavBar />
      <PageIndicator name={Fid.fed_name}/>
      <div className="">
        <div className="">
          <div className="main-row">
            <div className="">
              <img src={Fid.logo} alt="Loading..." />
            </div>
            <div className="">
              <h1>Federation name: {Fid.fed_name}</h1>
              <p>
                Andrey is driven by turning ideas into scalable and and
                empowering experiences that solve real life problems.
              </p>
              <p>
                He is currently the founder of Dvorak Media. Previously, Andrey
                was a product designer at Dropbox.
              </p>
              <p>
                Over the years, Michael has been priviledged to have worked with
                Adobe, Evernote, Square and more.
              </p>
              <h2>Number of unions:{Fid.union} </h2>
              <h2>Member </h2>
              <p> Reach them: &nbsp;
              <i className="fa fa-globe"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-envelope"></i>
              <i className="fa fa-instagram"></i>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Federation;
