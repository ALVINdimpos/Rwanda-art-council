import './ar.scss'
import { Container } from '@mui/system'
import React from 'react'
import HomeSide from '../HomeSide'
import UnionNavBar from '../navigatebar/UnionNavBar'
import UnionSidebar from '../sideFedbar/UnionSidebar'
import './ar.scss'
function ArtistPage() {
  return (
    <div className="home">
    <UnionSidebar />

    <div className="ar-body">
      <UnionNavBar />
      <Container>
        <>This is Artist</>
        </Container>

    </div>
    </div>

  )
}

export default ArtistPage