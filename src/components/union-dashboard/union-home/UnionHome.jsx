import { Container } from '@mui/system'
import React from 'react'
import HomeSide from '../HomeSide'
import UnionNavBar from '../navigatebar/UnionNavBar'
import UnionSidebar from '../sideFedbar/UnionSidebar'
import './home.scss'

function UnionHome() {
  return (
    <div className="home">
    <UnionSidebar />

    <div className="union-body">
      <UnionNavBar />
      <Container>
        <HomeSide />      
        </Container>

    </div>
    </div>

  )
}

export default UnionHome