import React from "react";
import Style from "./Style.module.css";
import Image1 from "../../../assets/photos/Image1.png";
import Image2 from "../../../assets/photos/images1.png";
import Image3 from "../../../assets/photos/images2.png";
import Image4 from "../../../assets/photos/images3.png";
import Image5 from "../../../assets/photos/Service1.png";
import Image6 from "../../../assets/photos/Service2.png";
import Image7 from "../../../assets/photos/Service3.png";

function Index() {
  return (
      <div className={Style.FideWorkBoxWraper}>
        <div className={Style.FideWorkBox1}>
          <img src={Image1} alt="description of image" />
          <p>Lorem Ipsum is simply dummy text of the fid</p> 
        </div>
        
        <div className={Style.FideWorkBox1}>
          <img src={Image1} alt="description of image" />
          <p>Lorem Ipsum is simply dummy text of the fid</p> 
        </div>

        <div className={Style.FideWorkBox1}>
          <img src={Image2} alt="description of image" />
          <p>Lorem Ipsum is simply dummy text of the fid</p> 
        </div>

        <div className={Style.FideWorkBox1}>
          <img src={Image3} alt="description of image" />
          <p>Lorem Ipsum is simply dummy text of the fid</p> 
        </div>

        <div className={Style.FideWorkBox1}>
          <img src={Image3} alt="description of image" />
          <p>Lorem Ipsum is simply dummy text of the fid</p> 
        </div>

        <div className={Style.FideWorkBox1}>
          <img src={Image4} alt="description of image" />
          <p>Lorem Ipsum is simply dummy text of the fid</p> 
        </div>
        <div className={Style.FideWorkBox1}>
          <img src={Image5} alt="description of image" />
          <p>Lorem Ipsum is simply dummy text of the fid</p> 
        </div>
        <div className={Style.FideWorkBox1}>
          <img src={Image6} alt="description of image" />
          <p>Lorem Ipsum is simply dummy text of the fid</p> 
        </div>
        <div className={Style.FideWorkBox1}>
          <img src={Image7} alt="description of image" />
          <p>Lorem Ipsum is simply dummy text of the fid</p> 
        </div>
      </div>
  );
}

export default Index;
