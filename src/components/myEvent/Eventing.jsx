import React from 'react'
import EventPrp from '../../pages/eventstrend/EventPrp'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../nav/Navbar'

function Eventing() {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
    <EventPrp />
      </div>
    </div>
    )
}

export default Eventing