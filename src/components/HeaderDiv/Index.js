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
  const exploreHandler = (e) => {
    e.preventDefault();
    navigate("/Gallery");
  };

  return (
    <div>
      <div className={HeaderStyle.MainHeader}>
        <div className={HeaderStyle.MainContent}>
          <p className={HeaderStyle.WlcText}>
            Art is beautiful, Art is life,expole Arts
          </p>
          <p className={HeaderStyle.WlcText1}>
            Rwanda Arts Council is a Non Profit Organization established by the
            artists purposely to bring together all the artists to advocate for
            them, and create broad lines that help them make profit through
            their Arts.
          </p>
          <div className={HeaderStyle.Button}>
            <Button name="Explore Artworks" onClick={exploreHandler} />
            <Button name="Be a member" onClick={getStartedHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
