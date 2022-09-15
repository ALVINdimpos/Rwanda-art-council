/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Style from "./Style.module.css";
import People1 from "../../../../assets/photos/art2.jpg";
import news from "../../../../assets/photos/news.jpeg";
import news1 from "../../../../assets/photos/news1.jpeg";
import People from "../../../../assets/photos/people.jpeg";

const Index = () => {
  return (
    <>
     <div className={Style.main}>
        <div className={Style.profile_card}>
          <div className={Style.img}>
            <img src={People} alt="" />
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
            <img src={news} alt=""/>
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
            <img src={news1} alt="" />
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
            <img src={People1}alt="" />
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
    </>
  )
}

export default Index