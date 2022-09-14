import './fedi.scss'
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { federationColumns } from '../../datatablesource'
function FedAPItable() {
  const [rowFed,setRowFed]=useState([])
  useEffect(()=>{
    fetch('https://rwanda-art-api.herokuapp.com/api/ViewUser',
    {
        method:'GET',
        headers:{
        'Authorization':'Bearer '+localStorage.getItem('token'),
        'Content-Type':'application/json'
    }       
}).then(res=>res.json())
    .then(val=>
          setRowFed(val.User?.Data)
        )
    .catch(err=>console.error('mention Error.',err))

   
  },[] )

  function approveFedederation(id){
    // console.log('found ID',id)
    // const apprFederation={
    //   name:
    // }


    fetch(`https://rwanda-art-api.herokuapp.com/api/users/Aproval/${id}`,{
    method:'POST',  
    headers:{
        'Authorization':'Bearer '+localStorage.getItem('token'),
        'Content-Type':'application/json'
      },
      body:JSON.stringify({status:"Approved"})
    }
     ).then(
      res=>{if(!res.ok) 
        console.log('Result found: ',res)})
    // {throw new Error('check error made while Posting Data to approve',res.statusText)}
    // return res.json()
    //   }
    // ).then(data=>console.log('actual data approved',data))
    // .catch(err=>console.error('Check Error',err.message))
    
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
                onClick={() => approveFedederation(params.row.id)}>
                Approve
                </div>
                </div>
              )
              
            }
          }
        
  ];



    return (
    <>
    <DataGrid
    rows={rowFed}
    columns={federationColumns.concat(actionColumn)}
    pageSize={10}
    autoHeight
    rowsPerPageOptions={[10]}

    /> 
        </>
    )
}

export default FedAPItable