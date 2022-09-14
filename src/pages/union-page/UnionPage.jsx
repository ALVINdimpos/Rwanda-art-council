import './uni.scss'
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/table/Table'
import Navbar from '../../components/nav/Navbar'
import UnionAPI from '../union-api-data/UnionAPI'
import {RiDownload2Fill} from 'react-icons/ri'
import { Container } from '@material-ui/core'

function UnionPage() {
  return (

      <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
          <div className="data-table">
          <Container>
          <UnionAPI/>
          </Container>
          </div>
        </div>
      </div>
    

    )
}

export default UnionPage