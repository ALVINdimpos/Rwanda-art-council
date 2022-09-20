import React from 'react'
import EventPrp from '../../pages/eventstrend/EventPrp'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../nav/Navbar'
import { Container } from '@mui/system'
import EventPage from '../event-pages/EventPage'
function Eventing() {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
         <Container>
          <EventPage title="Event Management side"/>
         </Container>
      </div>
    </div>
    )
}

export default Eventing