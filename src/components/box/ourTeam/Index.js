/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Style from "./Style.module.css";
import People1 from "../../../assets/photos/images1.png";
import news from "../../../assets/photos/news1.jpeg";

function Index() {
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
      <div className={Style.main}>
        <div className={Style.profile_card}>
          <div className={Style.img}>
            <img src={People1} />
          </div>
          <div className={Style.caption}>
            <h3>Fiston Alvin</h3>
            <p>UI/UX & WEB Designer</p>
            <div className={Style.social_links}>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={Style.profile_card}>
          <div className={Style.img}>
            <img src={news} />
          </div>
          <div className={Style.caption}>
            <h3>Fiston Alvin</h3>
            <p>UI/UX & WEB Designer</p>
            <div className={Style.social_links}>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={Style.profile_card}>
          <div className={Style.img}>
            <img src={news} />
          </div>
          <div className={Style.caption}>
            <h3> Fiston Alvin</h3>
            <p>UI/UX & WEB Designer</p>
            <div className={Style.social_links}>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={Style.profile_card}>
          <div className={Style.img}>
            <img src={People1} />
          </div>
          <div className={Style.caption}>
            <h3>Alvin fiston</h3>
            <p>UI/UX & WEB Designer</p>
            <div className={Style.social_links}>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
