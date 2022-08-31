import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { Data,userColumns } from '../DumFederation'
import './artist.scss'

export default function ArtistsTable() {
  console.log('Dummy Data',Data);
  return (
    <div className='tbl-container'>
      {/* <div style={{flexGrow:'1'}}> */}
      <DataGrid        
       columns={userColumns}
       rows={Data}
       checkboxSelection
       rowsPerPageOptions={[5]}
       pageSize={5}
       />
      {/* </div> */}
     
    </div>


    )
}
