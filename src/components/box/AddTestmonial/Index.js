import React from "react";
import "./Style.css"
import axios from "axios";

const Index = () => {
  const [image, setImage] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("client_picture", image);
    formData.append("client_name ", name);
    formData.append("message", message);
    axios
      .post("https://api.rwandaartscouncil.rw/api/testimonial/create", formData)
      .then((res) => {
        console.log(res);
      }
      )
      .catch((err) => {
        console.log(err);
      }
      );
  };
 return (
    <div>
      <div className="form__wrapper">
        <form action="/#" autoComplete="off">
          <div className="form active">
            <p className="form__subtitle">Personal info</p>
            <div className="form__input">
              <input type="file" placeholder="your photo" onChange={imageHandler} value={image} />
            </div>
            <div className="form__input">
              <input type="text" placeholder="Your name" onChange={nameHandler} value={name} />
            </div>
            <div className="form__input">
              <input type="text" placeholder="Enter your testmonial" onChange={messageHandler} value={message}/>
            </div>
            <div className="button__wrapper">
              <button id="next" className="button button--filled" onClick={submitHandler}>
               Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
