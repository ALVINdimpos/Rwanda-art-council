import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import Navbar from '../../nav/Navbar'
import './arts.scss'
export default function ArtsTable() {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      {/* <Datatable/> */}
    </div>
  </div>
    )
}
