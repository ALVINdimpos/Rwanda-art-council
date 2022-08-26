import React from 'react'
import Style from './Style.module.css'
import Partner1 from '../../../assets/photos/PartnerOne.png'
import Partner2 from '../../../assets/photos/PartnerTwo.png'
import Partner3 from '../../../assets/photos/PartnerThree.png'
import Partner4 from '../../../assets/photos/PartnerFour.png'
import Klablogo from "../../../assets/photos/Klablogo.png"

function Index() {
  return (
    <div>
        <h1 className={Style.h1}>Our partners</h1>
    <div className={Style.partnerWraper}>
        
        <div className={Style.partnerBox}>
           <img src={Partner1}alt="description of "/>
        </div>
        <div className={Style.partnerBox}>
           <img src={Partner2}alt="description of "/>
        </div>
        <div className={Style.partnerBox}>
           <img src={Partner3}alt="description of "/>
        </div>
        <div className={Style.partnerBox}>
           <img src={Partner4}alt="description of "/>
        </div>
        <div className={Style.partnerBox}>
           <img src={Klablogo}alt="description of "/>
        </div>


    </div>

    </div>
  )
}

export default Index