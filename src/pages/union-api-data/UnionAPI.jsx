import { Container } from '@mui/system'
import './uni.scss'
import { DataGrid } from '@mui/x-data-grid'
import React,{useEffect,useState} from 'react'
import { unionColumn } from '../../datatablesource'
import {RiDownload2Fill} from 'react-icons/ri'
// import *as XLSX from 'xlsx'

function UnionAPI() {
    const [union,setUnion]=useState([])

    useEffect(()=>{
        fetch('https://rwanda-art-api.herokuapp.com/api/Union/view',
        {
            method:'GET',
            headers:{
            'Authorization':'Bearer '+localStorage.getItem('token'),
            'Content-Type':'application/json'
        }       
    }).then(res=>res.json)
        .then(val=>
              setUnion(val.User?.Data)
            )
        .catch(err=>console.log('mention Error.',err))
    
       
      },[] )
const actionView=[
    {field:'action',
    headerName:'Action',
    renderCell:(params)=>{
        return(
            <div className='cellAction'>
                <div className='viewButton'>
                    view
                </div>
            
            </div>
        )
    }

}
]

// const workSheet=XLSX.utils.json_to_sheet(union)
// console.log('Wsheet Data',workSheet)



    return (
     <>
         <DataGrid 
            rows={union}
            columns={unionColumn.concat(actionView)}
            pageSize={10}
            rowsPerPageOptions={[10]}
            autoHeight
        />
          <div className="csv-session">
          <div className="csv-icon">
          <RiDownload2Fill  /> Download
          </div>
          </div>
     </>
    )
}


export default UnionAPI