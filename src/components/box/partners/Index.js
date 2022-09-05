import React from 'react'
import Style from './Style.module.css'
import Button from "../../Button/Index";
import Partner1 from '../../../assets/photos/PartnerOne.png'
import Partner2 from '../../../assets/photos/PartnerTwo.png'
import Partner3 from '../../../assets/photos/partnerr.png'
import Partner4 from '../../../assets/photos/PartnerFour.png'
import Klablogo from "../../../assets/photos/Klablogo.png"

function Index() {
  return (
   <>
    <h1 className={Style.heading}> Our partner</h1>
    <div className={Style.container}>
      <div className={Style.section1}>
         <div className={Style.custmo}>
         <p>Our team</p>
         <p>Fideration</p>
         <p>Our testmonial</p>
         </div>
         <div><h1>We work with the best partner</h1></div>
         <div className={Style.description} >
            <p>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Donec dignissim orci imperdiet
             tincidunt egestas. Maecenas dictum eros ut tortor
              bibendum convallis et non purus. Fusce sit amet 
              aliquam ex. Phasellus eu neque fringilla ligula 
        facilisis euismod</p></div>
         <div><Button name="Read more"/></div>

      </div>
      <div className={Style.section2}>
        <div className={Style.imageSection1}>
        <img src={Partner1}alt="description of "/>
        <img src={Partner2}alt="description of "/>
         <img src={Partner3}alt="description of "/>
        </div>
        <div className={Style.imageSection2}>
        <img src={Klablogo}alt="description of "/>
        <img src={Partner4}alt="description of "/>
        <img src={Partner3}alt="description of "/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Index