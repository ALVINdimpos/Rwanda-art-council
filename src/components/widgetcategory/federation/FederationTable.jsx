import React from 'react'
import Datatable from '../../datatable/Datatable'
import './federation.scss'
import Sidebar from '../../sidebar/Sidebar'
import Navbar from '../../nav/Navbar'
export default function FederationTable() {
  return (

    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <Datatable/>
    </div>
  </div>

    )
}
