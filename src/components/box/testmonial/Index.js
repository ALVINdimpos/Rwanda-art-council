/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import  "./Style.css";
import Test from "../../../assets/photos/Test.JPG"
import Test1 from "../../../assets/photos/Test1.jpg"
import Test3 from "../../../assets/photos/Test3.jpg"
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate.</p>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate.</p>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate!</p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Index;
