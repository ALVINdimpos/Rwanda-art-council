import React from 'react'
import { dataColumns,eventRow } from './EventData';
import { DataGrid } from "@mui/x-data-grid";
import { Link } from 'react-router-dom';
import './event.scss'


function Event() {
  const findFederation=()=>{
    return 'ok'
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return(
               <div className="cellAction">                                       
              <div
                className="deleteButton"
                onClick={() => findFederation(params.row.id)}>
                View
                </div>
                </div>
              )
              
            }
          }
        
  ];

  return (
  
<>
<DataGrid
    className="datagrid"
    rows={eventRow}
    columns={dataColumns.concat(actionColumn)}
    pageSize={5}
    rowsPerPageOptions={[5]}
  />
</>


  
  
);



}

export default Event