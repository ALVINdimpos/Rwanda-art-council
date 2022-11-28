import React from 'react'
import Style from "./Fiderations.module.css";
import NavBar from "../components/NavBar/Index";
import FidBox from "../components/box/FidBox/Index"
import Footer from "../components/Footer/Footer";
import PageIndicator from "../components/PageIndicator/Index";
const Fiderations = () => {
  return (
    <div>
        <NavBar />
        <PageIndicator name="More fiderations" />
        <div className={Style.FederationBoxWraper}>
        <FidBox />
      </div>

        <Footer />
    </div>
  )
}

export default Fiderations