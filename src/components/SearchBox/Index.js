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
        <optgroup label="PLASTIC ARTS">
                <option defaultValue>Select category</option>
                <option value="Illustrators">Illustrators</option>
                <option value="Painters">Painters</option>
                <option value="Sculptors">Sculptors</option>
              </optgroup>
              <optgroup label="MUSIC & DANCE">
                <option value="Singing">Singing</option>
                <option value="Dancing">Dancing</option>
                <option value="Instruments">Instruments</option>
                <option value="Composing">Composing</option>
              </optgroup>
              <optgroup label="FASHION">
                <option value="mercedes">Design</option>
              </optgroup>
              <optgroup label="ACTING & DRAMA">
                <option value="mercedes">Stage Acting</option>
                <option value="Film Acting">Film Acting</option>
                <option value="Comedy">Comedy</option>
              </optgroup>
              <optgroup label="CINEMATOGRAPHY & PHOTOGRAPHY">
                <option value="Photography">Photography</option>
                <option value="Filming">Filming</option>
                <option value="Animation">Animation</option>
              </optgroup>
              <optgroup label="LITERATURE">
                <option value="Writing">Writing</option>
                <option value="Poetry">Poetry</option>
              </optgroup>
        </select>
        <Button name="Search" />
      </div>
    </div>
  );
}

export default Index;
