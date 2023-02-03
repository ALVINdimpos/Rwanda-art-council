/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import "./Style.css"
import Logo from "../../assets/photos/Logo.png"
import { NavLink } from 'react-router-dom';

function Footer() {
const d = new Date();
const year = d.getFullYear();
const [email, SetEmail] = useState("");
const EmailHandler = (e) => {
  SetEmail(e.target.value);
};
const subscribeHandler = (e) => {
  e.preventDefault();
  fetch("https://api.rwandaartscouncil.rw/api/Subscriber/create",{
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      SetEmail("");
    }
    );

};
  return (
<div>
  <footer className="footer-section">
    <div className="container">
      <div className="footer-cta pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
              <i className="fas fa-map-marker-alt" />
              <div className="cta-text">
                <h4>Find us</h4>
                <span>Gasabo, Kacyiri, C/O Ministry of Youth </span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
              <i className="fas fa-phone" />
              <div className="cta-text">
                <h4>Call us</h4>
                <span> +250 788 352 342</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
              <i className="far fa-envelope-open" />
              <div className="cta-text">
                <h4>Mail us</h4>
                <span>rwandaartscouncil@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="footer-widget">
              <div className="footer-logo">
                <a href="index.html"><img src={Logo} className="img-fluid" alt="Loading..." /></a>
              </div>
              <div className="footer-text">
                <p>Rwanda Arts Council is None Profit Organization 
                  established by the artists purposly to bringing together
                   all the artists to advocate for them, and creating broad 
                   lines that help them make profit through their Art.</p>
              </div>
              <div className="footer-social-icon">
                <span>Follow us</span>
                <a href="https://web.facebook.com/rwanda.parliament/posts/rwanda-arts-council-rac-the-umbrella-organisation-that-groups-together-local-art/2271656552930801/?_rdc=1&_rdr"><i className="fab fa-facebook-f facebook-bg" /></a>
                <a href="https://twitter.com/rwandartcouncil"><i className="fab fa-twitter twitter-bg" /></a>
                <a href="https://google.com/rwandartcouncil"><i className="fab fa-instagram google-bg" /></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Useful Links</h3>
              </div>
              <ul>
                <li><NavLink to="/home" >Home</NavLink></li>
                <li><NavLink to="/Aboutus">About</NavLink></li>
                <li><NavLink to="/Whatwedo">Services</NavLink></li>
                <li><NavLink to="/Gallery">Gallery</NavLink></li>
                <li><NavLink to="/Contactus">Contact</NavLink></li>
                <li><NavLink to="/Event">Events</NavLink></li>
                <li><a to="/home">Excutive team</a></li>
                <li><a to="/home">Board team</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Subscribe</h3>
              </div>
              <div className="footer-text mb-25">
                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
              </div>
              <div className="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Email Address"  
                   onChange={EmailHandler}
                   value={email}/>
                  <button onClick={subscribeHandler}><i className="fab fa-telegram-plane" /></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 text-center text-lg-left">
            <div className="copyright-text">
            <p>Copyright © {year},<a href="https://alvinfiston.me/">Alvin</a>. All rights reserved</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
            <div className="footer-menu">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Policy</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

  )
}

export default Footer