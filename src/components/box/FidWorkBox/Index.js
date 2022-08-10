import React from "react";
import Style from "./Style.module.css";
import pic1 from "../../../assets/photos/art2.jpg";
import pic2 from "../../../assets/photos/painting.jpg";
import pic3 from "../../../assets/photos/arts.jpg";
import pic4 from "../../../assets/photos/new.jpeg";
import pic5 from "../../../assets/photos/Service1.png";
import pic6 from "../../../assets/photos/Service2.png";
import pic7 from "../../../assets/photos/Service3.png";

function Index() {
  return (
    <div>
      <div className={Style.FideWorkBoxWraper}>
        <div className={Style.FideWorkBox1}>
          <img src={pic1} alt="description of pic" />
          <p>Lorem Ipsum is simply dummy text of the fid</p> 
        </div>

        <div className={Style.FideWorkBox1}>
          <img src={pic2} alt="description of pic" />
          <p>Lorem Ipsum is simply dummy text of the fid</p> 
        </div>

        <div className={Style.FideWorkBox1}>
          <img src={pic3} alt="description of pic" />
          <p>Lorem Ipsum is simply dummy text of the fid</p> 
        </div>

        <div className={Style.FideWorkBox1}>
          <img src={pic4} alt="description of pic" />
          <p>Lorem Ipsum is simply dummy text of the fid</p> 
        </div>
        <div className={Style.FideWorkBox1}>
          <img src={pic5} alt="description of pic" />
          <p>Lorem Ipsum is simply dummy text of the fid</p> 
        </div>
        <div className={Style.FideWorkBox1}>
          <img src={pic6} alt="description of pic" />
          <p>Lorem Ipsum is simply dummy text of the fid</p> 
        </div>
        <div className={Style.FideWorkBox1}>
          <img src={pic7} alt="description of pic" />
          <p>Lorem Ipsum is simply dummy text of the fid</p> 
        </div>
      </div>
    </div>
  );
}

export default Index;
