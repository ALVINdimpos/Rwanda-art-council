import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { Data,userColumns } from '../DumFederation'

export default function Artists() {
  return (
    <DataGrid 
    columns={userColumns}
    rows={Data}
    checkboxSelection
    />


    )
}
