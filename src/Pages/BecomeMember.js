import React from 'react'
import NavBar from "../components/NavBar/Index";
import PageIndicator from "../components/PageIndicator/Index";
import Card from "../components/box/card/Index";
import Footer from "../components/Footer/Footer";

const becomeMember = () => {
  return (
    <>
    <NavBar/>
    <PageIndicator name="Be a member " />
    <Card/>
    <Footer/>
    </>
  )
}

export default becomeMember