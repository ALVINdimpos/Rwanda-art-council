/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import NavBar from "../NavBar/Index";
import Footer from "../Footer/Footer";
import Style from "./ContactusStyle.module.css";
import Button from "../Button/Index";
import PageIndicator from "../PageIndicator/Index";
import { useState,useEffect } from "react";
import axios from "axios";
import { MDBIcon } from "mdbreact";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
function Index() {
  const [email,setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message,setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const data={
    email,
    subject,
    message
  }
  const subjectHandler=(e)=>{
    setSubject(e.target.value);
  }
  const emailHandler=(e)=>{
    setEmail(e.target.value);
  }
  const messageHandler=(e)=>{
    setMessage(e.target.value);
  }
  const submitHandler= async(e)=>{
    e.preventDefault();
    setLoading(true);
    try {
    const res=  await axios.post(
        "https://rwanda-art-api.herokuapp.com/api/contact-us",
        data
      );
      console.log(res)
      setLoading(false);
    } catch (error) {
      setEmail("");
      setSubject("");
      setMessage("");
      console.log(error);
      setLoading(false);
    }
  }
	useEffect(()=>{
  submitHandler();
	},[])
  return (
    <>
      <NavBar />
      <PageIndicator name="Contact us" />
      <div className={Style.loginMainWrapper}>
        <div className={Style.mapouter}>
          <div className="gmap_canvas">
            <iframe
              width={800}
              height={500}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Rwanda%20art%20council&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder={0}
              scrolling="no"
            />
          </div>
        </div>
        <div className={Style.loginWrapper}>
          <div>
            <div>
              <h4 style={{ color: "#c5801a" }}>
                <MDBIcon fas icon="angle-left" />
                Home
              </h4>
            </div>
          </div>
          <div>
            <h1>Get In Touch</h1>
          </div>
          <div>
            <p>We are here for you! How can we help you?</p>
          </div>
          <div>
            <MDBInput
              id="typeText"
              type="email"
              placeholder="Enter your email"
              onChange={emailHandler}
            />
          </div>
          <div>
            <MDBInput
              id="typeText"
              type="text"
              placeholder="Subject"
              onChange={subjectHandler}
            />
          </div>
          <div>
            <MDBTextArea id="textAreaExample" rows={4} onChange={messageHandler} />
          </div>
          <div>
            <Button name={loading ? "loading..." : `Send email`} onClick={submitHandler}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
