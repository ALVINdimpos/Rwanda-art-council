import React from "react";
import Style from "./Style.module.css";
import Testmo1 from "../../../assets/photos/Test1.svg";
import Testmo2 from "../../../assets/photos/Test2.svg";
import Testmo3 from "../../../assets/photos/Test3.svg";
import People1 from "../../../assets/photos/people.jpeg";

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
          <div className={Style.People1}>
            <img src={People1} alt="description of pic" />
            <h5>Hannah Schmitt</h5>
            <h6>Lead designer</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim{" "}
            </p>
          </div>
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
