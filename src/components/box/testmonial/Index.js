import React from "react";
import Style from "./Style.module.css";
import Testmo1 from "../../../assets/photos/ish.svg";
import Testmo2 from "../../../assets/photos/kenny.svg";
import Testmo3 from "../../../assets/photos/juno.svg";

import { MDBIcon } from "mdbreact";

function Index() {
  return (
    <div>
      <div className={Style.dot}>
        <h1>Our success stories</h1>
        <MDBIcon fas icon="circle" className={Style.dot1} />
        <MDBIcon fas icon="circle" />
        <MDBIcon fas icon="circle" />
      </div>
      <div className={Style.testWraper}>
      <div className={Style.testmonial}>
          <img src={Testmo1} alt="description of pic" />
        </div>
        <div className={Style.testmonial}>
          <img src={Testmo2} alt="description of pic" />
        </div>
        <div className={Style.testmonial}>
          <img src={Testmo3} alt="description of pic" />
        </div>
      </div>
    </div>
  );
}

export default Index;
