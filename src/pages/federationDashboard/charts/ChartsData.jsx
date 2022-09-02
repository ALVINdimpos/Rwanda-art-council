import './chart.scss'
import React from 'react'
import ChartsArtist from '../artistCharts/ChartsArtist'

function ChartsData() {
  return (
    <>
    <div className='container-chart'>
        <div className='charts'>
            <div className='poly'>
                <span>Artist Charts</span>

                <ChartsArtist/>


            </div>
            <div className='widget'>
                <div className='my-widge'>
                  <div className='w-1'>
                    widget 1
                    </div>  
                    <div className='w-2'>
                        widget 2
                    </div>
                  
                </div>
                <div className='progress-bar'>
                        hha
                    </div>
            </div>
        </div>

    </div>
    </>
    )
}

export default ChartsData