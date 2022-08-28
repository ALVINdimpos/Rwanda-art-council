import React from 'react'
import View from '../viewing/View'
import Navbar from '../../components/nav/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

function ViewID() {
  return (
    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <Navbar />
      <View />      
   
    </div>
  </div>

    )
}

export default ViewID