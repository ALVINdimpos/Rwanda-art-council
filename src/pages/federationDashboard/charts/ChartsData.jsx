import './chart.scss'
import {BiPlusMedical} from 'react-icons/bi'
import React from 'react'
import ChartsArtist from '../artistCharts/ChartsArtist'
import { BsCheckAll } from 'react-icons/bs'
import EventDialog from '../../event-dialog-reg/EventDialog'
import EventPrp from '../../eventstrend/EventPrp'
function ChartsData() {
  return (
    <>
    <div className='container-chart'>
        <div className='charts'>
            <div className='poly'>
                <span>Unions Graphical Representation</span>

                <ChartsArtist/>


            </div>
            <div className='widget'>
                <div className='my-widge'>
                  <div className='w-1'>
                  <div className="middle">
                    <div className='icon-side'>
                    <BsCheckAll className='icons'/>
                    </div>
                    <div className='icon-details'>
                    <span className='size-total'>120</span>
                        <span className='desc'>Total Unions</span>

                    </div>
                </div>
               

                    </div>  
                    <div className='w-2'>
                    <div className="lower">
                <div className='icon-side'>
                    <BsCheckAll className='icons'/>
                    </div>
                    <div className='icon-details'>
                    <span className='size-total'>120</span>
                        <span className='desc'>Total Unions</span>

                    </div>         
                   </div>                
                       </div>
                  
                </div>
                <div className='progress-bar'>
                        <div className="union-side">
                            <span>Event</span>



                        </div>
                    <div className="event-side">
                        <div className="upp-side">
                            Recent Union
                        </div>
                    <div className="bottom-part">                  
                        <EventDialog title='Event Preparation'>
                            <EventPrp />
                        </EventDialog>
                      </div>
                    </div>
                    </div>
            </div>
        </div>

    </div>
    </>
    )
}

export default ChartsData