import './reg.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/nav/Navbar'
import React from 'react'
import RegForm from '../registration-form/RegForm'

function RegFedContainer() {

      return (
        <div className="list">
          <Sidebar/>
          <div className="listContainer">
            <Navbar/>
             <RegForm /> 
          </div>
        </div>
        )
    }
    

export default RegFedContainer