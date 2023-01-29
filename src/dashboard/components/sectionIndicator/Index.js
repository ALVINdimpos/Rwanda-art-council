import { MDBIcon } from 'mdbreact'
import React from 'react'
import Style from './Style.module.css'

function Index(props) {
  return (
    <div>
    <div className={Style.sectionIndicatorStyle}>
      <div className={Style.SEction}>
        <MDBIcon fas icon="angle-double-right" />
         <p style={{alignSelf:'center',marginLeft:'17px',marginTop:'17px',fontWeight:'bold'}}>{props.name}</p>
      </div>
   
    <button className={Style.viewAllButton} onClick={props.onClick}>View all</button>
    
    </div>

    </div>
  )
}

export default Index