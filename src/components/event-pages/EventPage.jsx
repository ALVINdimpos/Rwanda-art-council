import React, { useState } from 'react'
import UnionEvent from '../event-api/union-event/UnionEvent'
import FederationEvent from '../event-api/federation-event/FederationEvent'
import AllEvent from '../event-api/all-Event/AllEvent'
import RaCouncilEvent from '../event-api/admin-event/RaCouncilEvent'
import './eve.scss'
function EventPage({title}) {
    const [page,setPage]=useState(0)
            let current=[]

    function findEvent(){
        if(page==0){
            return findAllEvent()
        }
        else if(page==1){
            return findAdminEvent()
        }
        else if(page==2){
            return findFederationEvent()
        }
        else if(page==3){
            return findUnionEvent()
        }

    }

    function findAdminEvent(){
        return <RaCouncilEvent />
    }
    function findAllEvent(){
            return <AllEvent />    
    }
    function findFederationEvent(){
        return <FederationEvent />
    }
    function findUnionEvent(){
        return <UnionEvent />
    }
  return (
    <>
        <div className="event-container">
            <div className="title-side">
                <span>{title}</span>
            </div>
            <div className="up-side">

            </div>
            <div className="body-side">
                <div className="inner-nav-side">
                    <div className="top-button" onClick={()=>setPage(0)}>
                        All Event
                    </div>
                    <div onClick={()=>setPage(1)} className="mid-button">
                        Our Event
                    </div>
                    <div onClick={()=>setPage(2)} className="mid-button">
                        Federatoin
                    </div>
                    <div onClick={()=>setPage(3)} className="mid-button">
                        Union
                    </div>
                    

                </div>
                <div className="left-side">
                {findEvent()}
                </div>

            </div>
        
        </div>
    </>
    )
}

export default EventPage