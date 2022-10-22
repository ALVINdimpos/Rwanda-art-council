/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/Index";
import Footer from "../Footer/Footer";
import Style from "./ContactusStyle.module.css";
import Button from "../Button/Index";
import PageIndicator from "../NavBar/PageIndicator/Index";
import { MDBIcon } from "mdbreact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import {validator} from "validator";
import axios from "axios";

function Index() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailValid, setEmailValid] = useState("");
  const [subjectValid, setSubjectValid] = useState("");
  const [messageValid, setMessageValid] = useState("");
  const [loading, setLoading] = useState(false);
  const data = {
    email,
    subject,
    message,
  };
  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      setEmailValid("");
    } else {
      setEmailValid("Please enter a valid email");
    }
    if (subject.length < 5) {
      setSubjectValid("Subject must be 5 characters long");
    } else {
      setSubjectValid("");
    }
    if (message.length < 10) {
      setMessageValid("Message must be 10 characters long");
    } else {
      setMessageValid("");
    }
    setLoading(true);
    try {
      const res = await axios.post(
        "https://rwanda-art-api.herokuapp.com/api/contact-us",
        data
      );
      if (res.status === 200) {
        toast.success("Message sent successfully");
        console.log(res);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setEmail("");
    setSubject("");
    setMessage("");
    setEmailValid("");
    setSubjectValid("");
    setMessageValid("");
  };
  useEffect(() => {
    submitHandler();
  }, []);
  return (
    <>
      <NavBar />
      <PageIndicator name="Contact us" />
      <div className={Style.loginMainWrapper}>
        <div className={Style.mapouter}>
          <div className="gmap_canvas">
            <iframe
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
              value={email}
            />
          </div>
          {emailValid && <div className={Style.error}>{emailValid}</div>}
          <div>
            <MDBInput
              id="typeText"
              type="text"
              placeholder="Subject"
              onChange={subjectHandler}
              value={subject}
            />
          </div>

          {subjectValid && <div className={Style.error}>{subjectValid}</div>}
          <div>
            <MDBTextArea
              id="textAreaExample"
              rows={4}
              onChange={messageHandler}
              value={message}
            />
          </div>
          {messageValid && <div className={Style.error}>{messageValid}</div>}
          <div>
            <Button
              name={loading ? "loading..." : `Send email`}
              onClick={submitHandler}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default Index;
