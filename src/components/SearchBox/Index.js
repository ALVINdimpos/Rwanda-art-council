import React from "react";
import SearchStyle from "./Style.module.css";
import { MDBInput } from "mdb-react-ui-kit";
import Button from "../Button/Index";
function Index() {
  return (
    <div>
      <div className={SearchStyle.searchBox}>
        <MDBInput
          id="typeText"
          type="text"
          placeholder="Search by name, artist"
        />

        <select name="" id="cars" className={SearchStyle.select}>
          <optgroup label="Swedish Cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </optgroup>
          <optgroup label="German Cars">
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </optgroup>
        </select>
        <Button name="Search" />
      </div>
    </div>
  );
}

export default Index;
