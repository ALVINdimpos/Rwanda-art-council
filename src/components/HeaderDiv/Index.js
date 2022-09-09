import React from "react";
import HeaderStyle from "./Style.module.css";
import Button from "../Button/Index";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  const getStartedHandler = (e) => {
    e.preventDefault();
    navigate("/BecomeMember");
  };
  return (
    <div>
      <div className={HeaderStyle.MainHeader}>
        <div className={HeaderStyle.MainContent}>
          <p className={HeaderStyle.WlcText}>
            Art is beautiful, Art is life,expole Arts
          </p>
          <p className={HeaderStyle.WlcText1}>
            Browse our collection to find the masterpiece that you desire or
            Join us today to start selling.
          </p>
          <div className={HeaderStyle.Button}>
            <Button name="Explore Artworks" />
            <Button name="Get started" onClick={getStartedHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
