import React from "react";
import Style from "./Style.module.css";
import NewsPhoto1 from "../../../assets/photos/news1.png";
import NewsPhoto2 from "../../../assets/photos/news2.png";
import NewsPhoto3 from "../../../assets/photos/news3.png";
import Button from '../../Button/Index'

function Index() {
  return (
    <div>
      <div className={Style.NewsWraper}>
        <div className={Style.NewsBox}>
          <img src={NewsPhoto1} alt="description of "/>
          <h4>Donec Sit Amet Nibh</h4>
          <h5>by Nick Roach | May 9, 2014 | Category</h5>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. in voluptate velit{" "}
          </p>
          <Button name="Read more"/>
        </div>
        <div className={Style.NewsBox}>
          <img src={NewsPhoto2} alt="description of "/>
          <h4>Donec Sit Amet Nibh</h4>
          <h5>by Nick Roach | May 9, 2014 | Category</h5>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. in voluptate velit{" "}
          </p>
          <Button name="Read more"/>
        </div>
        <div className={Style.NewsBox}>
          <img src={NewsPhoto3} alt="description of "/>
          <h4>Donec Sit Amet Nibh</h4>
          <h5>by Nick Roach | May 9, 2014 | Category</h5>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. in voluptate velit{" "}
          </p>
          <Button name="Read more"/>
        </div>
      </div>
    </div>
  );
}

export default Index;
