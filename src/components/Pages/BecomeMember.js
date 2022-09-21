import React from 'react'
import NavBar from '../NavBar/Index'
import PageIndicator from "../PageIndicator/Index";
import Card from "../box/card/Index";
import Footer from "../Footer/Footer"

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