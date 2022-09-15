/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Style from "./Style.module.css";
import BoardTeam from "./BoardTeam/Index";
import ExcutiveTeam from "./ExcutiveTeam/Index"

function Index() {
  const [ActiveTab, setActiveTab] = React.useState(1);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Raleway",
          marginTop: "2rem",
        }}
      >
        Meet our team
      </h1>
      <div className={Style.ActiveTab}>
      <h3 onClick={()=>setActiveTab(1)}>Board team</h3>
      <h3 onClick={()=>setActiveTab(2)}> Excutive team</h3>
      </div>
      {
        ActiveTab===1 && (
     <BoardTeam/>
      )}
      {
        ActiveTab===2 && (
          <ExcutiveTeam />
      )};
    </div>
  );
}

export default Index;
