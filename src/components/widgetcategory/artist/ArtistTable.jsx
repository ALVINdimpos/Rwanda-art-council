import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import {artist,artistColumn} from './ArtistDum'
import Navbar from '../../nav/Navbar'
import Sidebar from '../../sidebar/Sidebar'

export default function ArtistTable() {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <DataGrid
      rows={artist}
      columns={artistColumn}
      pages={5}
        rowsPerPageOptions={[5]}
        Style="{DynamicResource DataGridStyle1}"
      />
    </div>
  </div>
  )
}
