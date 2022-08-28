import React from "react";
import Style from './Style.module.css'

function Index(props) {
  return (
    <>
      <div className={Style.PageIndicator}>
        <h1 className={Style.Gallery}>{props.name}</h1>
      </div>
    </>
  );
}

export default Index;
