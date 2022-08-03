import React from "react";
import Style from "./Style.module.css";
import { MDBInput } from "mdb-react-ui-kit";
import Button from "../../Button/Index"
import { MDBIcon } from 'mdbreact'
function Index() {
  return (
    <>
     
        <div className={Style.loginWraper}>
          
          <div>
          <MDBIcon fas icon="times" />
            <MDBInput
              id="typeText"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <MDBInput id="typeText" type="text" placeholder="Phone number" />
          </div>
          <div>
              <Button name="Book now"/>
          </div>
          </div>
            
    
    </>
  );
}

export default Index;
