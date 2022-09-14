import React from 'react'
import './federation.scss'
import Sidebar from '../../sidebar/Sidebar'
import Navbar from '../../nav/Navbar'
import FedAPItable from '../../../pages/federationTable/FedAPItable'
export default function FederationTable() {
  return (

    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <FedAPItable/>
    </div>
  </div>

    )
}
