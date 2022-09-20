import './ev-card.scss'
import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiTwotoneDelete} from 'react-icons/ai'
import  {GrFormViewHide} from 'react-icons/gr'
import EventViewPop from '../../event-view-pop-dialog/EventViewPop'
import EventView from '../../../pages/event-view/EventView'

function EventCard() {
  return (
    <>
     <div className="card">
      <div className="card-title">
        <span>
          kwita izina
        </span>

        <span>
          12-may-2017
        </span>
      </div>
      <div className="card-body">
      <p>
    
      This paragraph contains a lot of spaces
        in the source code, but the browser ignores it.
</p>
      </div>
      <div className="card-footer">
        <div className="icon-side">

           <button><BiEdit/></button>

          <button><AiTwotoneDelete /></button>
       

        </div>
        <div className="view-side">
          <button>
          <GrFormViewHide />
          </button>
        </div>
      </div>
      </div>
{/* dummy data manipulation starting here */}
<div className="card">
      <div className="card-title">
        <span>
          kwita izina
        </span>

        <span>
          12-may-2017
        </span>
      </div>
      <div className="card-body">
      <p>
      This paragraph contains a lot of spaces
        in the source code, but the browser ignores it.
</p>
      </div>
      <div className="card-footer">
        <div className="icon-side">

           <button><BiEdit/></button>

          <button><AiTwotoneDelete /></button>


        
          

        </div>
        <div className="view-side">
          <button>
            <EventViewPop title="View Event">
                    <EventView />
                </EventViewPop>
          </button>
        </div>
      </div>
      </div>
      <div className="card">
      <div className="card-title">
        <span>
          kwita izina
        </span>

        <span>
          12-may-2017
        </span>
      </div>
      <div className="card-body">
      <p>
      This paragraph contains a lot of spaces
        in the source code, but the browser ignores it.
</p>
      </div>
      <div className="card-footer">
        <div className="icon-side">

           <button><BiEdit/></button>

          <button><AiTwotoneDelete /></button>


        
          

        </div>
        <div className="view-side">
          <button>
          <GrFormViewHide />
          </button>
        </div>
      </div>
      </div>
      <div className="card">
      <div className="card-title">
        <span>
          kwita izina
        </span>

        <span>
          12-may-2017
        </span>
      </div>
      <div className="card-body">
      <p>
      This paragraph contains a lot of spaces
        in the source code, but the browser ignores it.
</p>
      </div>
      <div className="card-footer">
        <div className="icon-side">

           <button><BiEdit/></button>

          <button><AiTwotoneDelete /></button>


        
          

        </div>
        <div className="view-side">
          <button>
          <GrFormViewHide />
          </button>
        </div>
      </div>
      </div>
      <div className="card">
      <div className="card-title">
        <span>
          kwita izina
        </span>

        <span>
          12-may-2017
        </span>
      </div>
      <div className="card-body">
      <p>
      This paragraph contains a lot of spaces
        in the source code, but the browser ignores it.
</p>
      </div>
      <div className="card-footer">
        <div className="icon-side">

           <button><BiEdit/></button>

          <button><AiTwotoneDelete /></button>


        
          

        </div>
        <div className="view-side">
          <button>
          <GrFormViewHide />
          </button>
        </div>
      </div>
      </div>
    </>
    )
}

export default EventCard