import './all-event.scss'
import React, { useState,useEffect } from 'react'
import EventCard from '../all-event-card/EventCard'
import EventCardList from '../event-card-list/EventCardList'
import { DumdataEvent } from '../EventDataDummy'
function AllEvent() {
  const [events,setEvents]=useState([])
useEffect(()=>{
  DumdataEvent.map(event=>setEvents(event))
},[])
  return (
    <>
    All Event here.../
    <div className="card-container">
      <EventCardList/>
      </div>

    </>

    )
}

export default AllEvent