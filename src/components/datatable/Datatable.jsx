import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns,artistData } from "../../datatablesource";
import { Link, NavLink } from "react-router-dom";
import {useEffect, useState } from "react";
import { getTocken
,aprove_uri,base_uri,convertDate
} from "../token/Token";
import axios from "axios";
const Datatable = () => {
  const [row,setRow] =useState([]) //it refers to data from API
  // const [rowData,setRowData]=useState([])  //this is for the dummy data from current test
  const [rowData,setRowData]=useState(artistData)  //this is for the dummy data from current test
  const [userId,setUserId]=useState([])
    function convertDate(dt){
      const date= Date.parse(dt);
      return new Date(date).getFullYear()
    }


    
//this is API data

//     useEffect(()=>{
//       fetch(base_uri,{
//         method: 'GET',
//         headers: {
//             'Authorization': getTocken(),
//             'Content-Type': 'application/json'
//         }})
//         .then(result=>{
//           return result.json()})
//         .then(data=>{setRow(data)
          
//         })
//     },[])

// useEffect(()=>{
//   setRowData(row.User?.Data)

// },[])
// console.log('RowDAta',row.User?.Data)







  const handleDelete = (id) => {
    setRowData(rowData.filter((item) => item.id !== id));
  };




  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return(
              
              
                <div className="cellAction">
              
                    
    <Link to={`/users/${1}`} style={{ textDecoration: "none" }}>
     <div className="viewButton">View Artist</div>
   </Link>
              {/* <div
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}>
                Delete
                </div> */}
                </div>
              )
              
            }
          }
        
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
      Artist List
        {/* <Link to="/users/new" className="link">
          Add New
        </Link> */}
      </div>
      <DataGrid
        className="datagrid"
        rows={rowData}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        autoHeight
      />
    </div>
  );
};

export default Datatable;
