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
          Art is a powerful expression of life that 
          allows us to explore our creativity and discover 
          beauty in our world.
          </p>
          <div className={HeaderStyle.Button}>
            <Button name="Explore Artworks" />
            <Button name="Be a member" onClick={getStartedHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
