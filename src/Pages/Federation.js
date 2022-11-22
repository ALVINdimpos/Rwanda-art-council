/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar/Index";
import Footer from "../components/Footer/Footer";
import PageIndicator from "../components/PageIndicator/Index";
import FidImage from "../assets/photos/Back3.jpg";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./Federation.css";

const Federation = () => {
  const { state } = useLocation();
  console.log(state.data, "state");
  const [Fid, setFid] = useState(state?.data);
  console.log(Fid, "This is federation data");
  return (
    <>
      <NavBar />
      <PageIndicator name={Fid.fed_name} />
      <div className="">
        <div className="">
          <div className="main-row">
            <div className="">
              <img src={FidImage} alt="" />
            </div>

            <div className="">
              <h1>Federation name: {Fid.fed_name}</h1>
              <h2>Union </h2>
              <h2>Member </h2>
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
              <p>
                He is currently the founder of Dvorak Media. Previously, Andrey
                was a product designer at Dropbox.
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
