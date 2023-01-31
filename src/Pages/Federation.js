/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar/Index";
import Footer from "../components/Footer/Footer";
import PageIndicator from "../components/PageIndicator/Index";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Federation.css";

const Federation = () => {
  const { state } = useLocation();
  const [Fid, setFid] = useState(state.data);
  return (
    <>
      <NavBar />
      <PageIndicator name={Fid.fed_name} />
      <div className="">
        <div className="">
          <div className="main-row">
            <div className="">
              <img src={Fid.logo} alt="Loading..." />
            </div>
            <div className="Fid_contents">
              <h1>Federation name: {Fid.fed_name}</h1>
              <p> {Fid.description}</p>
              <p>
                <span>Federation leader:</span> {Fid.lname}
              </p>
              <p>
                <span>Email address:</span> {Fid.email}
              </p>
              <p>
                <span>Phone number:</span> {Fid.phone}
              </p>
              <h2>Number of unions:{Fid.union} </h2>
              <p>
                {" "}
                Reach them: &nbsp;
                <i className="fa fa-globe"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
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
