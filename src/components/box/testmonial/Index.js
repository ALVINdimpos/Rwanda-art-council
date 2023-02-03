/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Style.css";
import Test from "../../../assets/photos/Test.JPG";
import Test1 from "../../../assets/photos/Test1.jpg";
import Test3 from "../../../assets/photos/Test3.jpg";
function Index() {
  return (
    <div className="testimonials">
      <div className="testimonial-inner">
        <h1>Testimonial</h1>
        <div className="border" />
        <div className="row">
          <div className="col">
            <div className="testimonial">
              <img src={Test} alt="" />
              <div className="name">Lorem ipsum</div>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <p>
                I just wanted to share a quick note and let you know that you
                guys do a really good job. I’m glad I decided to work with you.
                It’s really great how easy your websites are to update and
                manage. I never have any problem at all.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="testimonial">
              <img src={Test1} alt="" />
              <div className="name">Lorem ipsum</div>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <p>
                Wow. I just visited this site and it was SO SIMPLE. I am blown
                away. You guys truly kick ass. Thanks for being so awesome. High
                fives!
              </p>
            </div>
          </div>
          <div className="col">
            <div className="testimonial">
              <img src={Test3} alt="" />
              <div className="name">Lorem ipsum</div>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <p>
                Thank you so much for a job well done. You guys are the best!
                Keep up the great workI just wanted to let you know that it’s
                been great working with you.! You’ve been so helpful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
