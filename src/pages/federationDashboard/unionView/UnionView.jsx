import './unionV.scss'
import FedSidebar from '../sideFedbar/FedSidebar'
import FedNavbar from '../navigatebar/FedNavbar'
import { dataUnion } from '../unionDetails'
import { TiUserAdd } from 'react-icons/ti'
import { BsCheckAll } from 'react-icons/bs'
import React from 'react'
import UnionCharts from '../union-chart/UnionCharts'
import Barchart from '../union-chart/Barchart'
import * as XLSX from 'xlsx'
import UnionAdd from '../unionAddition/UnionAdd'
import UnionForm from '../unionbyDialog/UnionForm'
import Artists from "../artists/ArtistsTable";
import {BiPlusMedical} from 'react-icons/bi'
import {RiUpload2Fill} from 'react-icons/ri'
export default function UnionView() {
    function handleClick(){

    const wShet= XLSX.utils.json_to_sheet(Data)
    XLSX.utils.sheet_add_aoa(wShet,[["Id","First_Name","Last_Name",
  "email","mobile","Gender","Adress",
  "National_ID","Federation","Union"]],{origin:"A1"})
    const workB=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workB,wShet,"Draft")
  
    XLSX.writeFile(workB,"DumedData.xlsx")
  
  

   }
  return (
<div className='uni-container'>
    <FedSidebar/>
    <div className='uni-body'>
        <FedNavbar />
        <div className='union-header-graph'>
            
            <div className="union-upper">

            <div className="details-part">
                <div className="top">
                    <div className="icon-side">
                    <TiUserAdd className='icons'/>
                    </div>
                    <div className="icon-details">
                    <span className='size-total'>100</span>
                    <span className='desc'>Added Unions</span>
                    </div>
                        
                    
                  </div>
                {/* <div className="middle">
                    <div className='icon-side'>
                    <BsCheckAll className='icons'/>
                    </div>
                    <div className='icon-details'>
                    <span className='size-total'>120</span>
                        <span className='desc'>Total Unios</span>

                    </div>
                </div>
                <div className="lower">
                <div className='icon-side'>
                    <BsCheckAll className='icons'/>
                    </div>
                    <div className='icon-details'>
                    <span className='size-total'>120</span>
                        <span className='desc'>Total Unios</span>

                    </div>         
                   </div> */}
            </div>
            <div className="graph-1">
                        <div className="gr-desc">
                        <span>Union Analytics in Common</span>
                        </div>
                        <div className='pie-chart'>
                        <UnionCharts />
                        </div>


            </div>
            <div className="graph-2">
                <div className="title">
                <span >Most Frequent analysis for Union Registration</span> 
                </div>
                <div className='bar-chart'>
                <Barchart />
                </div>
            </div>


            </div>
{/* 
          <div className="artist-table">
            <div className='tbl-title'>
           
            <div>
              <UnionForm title='Union Registration'>
                <UnionAdd />
              </UnionForm >

            </div>  
            <div className="upl-CSV">
            <input  type='file' onChange={e=>handleFile(e)}/> 
            <button onClick={handleClick} className="btn-upload"><RiUpload2Fill style={{fontSize:"large"}} /></button>
            </div>
            </div> 
           <Artists/>
          </div> */}



            {/* <div className='bott-graph'>
                <div className="max-val-display">
                    <div className="header-part">
                     MY fEDERATION..
                    </div>
                    <div className="large-btn">
                            100
                    </div>
                </div>
                <div className="graph-part">
                <LinealDashd/>
                </div>
             </div>
             <div className='bott-graph'>
                <div className="max-val-display">
                    <div className="header-part">
                         MY Federation ..
                    </div>
                    <div className="large-btn">
                            100
                    </div>
                </div>
                <div className="graph-part">
                    <DashedChart />
                </div>
             </div>
             <div className='bott-graph'>
                <div className="max-val-display">
                    <div className="header-part">
                        THIS HEADER
                    </div>
                    <div className="large-btn">
                            100
                    </div>
                </div>
                <div className="graph-part">
                    <BarChat />
                </div>
             </div> */}
            </div>
            </div>

</div>
    
  )}
