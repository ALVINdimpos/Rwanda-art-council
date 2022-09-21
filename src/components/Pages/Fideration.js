/* eslint-disable no-unused-vars */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../NavBar/Index";
import Footer from "../Footer/Footer";
import PageIndicator from "../PageIndicator/Index";
import FidImage from "../../assets/photos/Back3.jpg"
import { useEffect,useState } from 'react';
import "./Fideration.css";

const Fideration = () => {
  const [Fid, setFid] = useState(null);
  useEffect(() => {
    fetch(`https://rwanda-art-api.herokuapp.com/api/ViewUser/1`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFid(data);
        console.log(data);
      }
      );
  }, []);
  return (
    <>
<NavBar/>
<PageIndicator name="Fideration name"/>
<div className=''>
        <div className=''>
          <div className='main-row'>
            <div className=''>
              <img src={FidImage} alt=""/>
            </div>

            <div className="">
              <h1>Fideration</h1>
              <h2>Union </h2>
              <p>Andrey is driven by turning ideas into scalable and and empowering experiences that solve real life problems.</p>
              <p>He is currently the founder of Dvorak Media. Previously, Andrey was a product designer at Dropbox.</p>
              <p>Over the years, Michael has been priviledged to have worked with Adobe, Evernote, Square and more.</p>
              <p>He is currently the founder of Dvorak Media. Previously, Andrey was a product designer at Dropbox.</p>
              <p>Over the years, Michael has been priviledged to have worked with Adobe, Evernote, Square and more.</p>
            </div>
          </div>
        </div>
      </div>

<Footer/>
    </>
  )
}

export default Fideration