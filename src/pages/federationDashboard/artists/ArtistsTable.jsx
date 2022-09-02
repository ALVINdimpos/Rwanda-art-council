import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { Data,userColumns } from '../DumFederation'
import './artist.scss'
import { Link } from 'react-router-dom'

export default function ArtistsTable() {

  const handleView=(id)=>{
    return id;
  }
  const actionColumn=[{
    field:'action',
    HeaderName:"action",
    width:80,
    flwx:1,
    renderCell:(params)=>{
      return (
        <div className="cellAction">
          <div className='viewButton' >
            <Link to='/viewartist'>View</Link>
          </div>
        </div>
      )

    }


}]


  return (
    <div className='tbl-container'>
      <DataGrid   
      className='table'     
       columns={userColumns.concat(actionColumn)}
       rows={Data}
       checkboxSelection
       rowsPerPageOptions={[5]}
       pageSize={5}
       autoHeight
       />
     
    </div>


    )
}
