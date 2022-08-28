import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-bootstrap-icons";
import {useEffect,useState} from 'react';
import { getTocken } from "../token/Token";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "./MyColumn";
import { aprove_uri } from "../token/Token";
import axios from "axios";
const List = () => {

  const [row,setRow] =useState([])
  const base_uri=`https://rwanda-art-api.herokuapp.com/api/ViewUser`
    
  const myImage='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'      
    function convertDate(dt){
      const date= Date.parse(dt);
      return new Date(date).getFullYear()
    }
    useEffect(()=>{
      fetch(base_uri,{
        method: 'GET',
        headers: {
            'Authorization': getTocken(),
            'Content-Type': 'application/json'
        }})
        .then(result=>{
          return result.json()})
        .then(data=>{setRow(data?.User.Data)})
    },[])

    const approveFedederation=(id)=>{
      console.log('Parsed Integer Type', id)
      //       fetch(aprove_uri/`${parseInt(id)}`,{
      //   method:'POST',
      //   headers:{
      //     'Authorization':getTocken(),
      //     'Content-Type':'application/json'}
      // },
      // {


      // }

    //   ).then(item=>{
    //     if(!item.ok)  throw new Error(`this is certain error${item.statusText}`)
    //     return item.json()
    //   }).then(data=>console.log(data)).catch(err=>console.log('This is Error:',err.message))
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
    
      <div className="datatable">
    
      <DataGrid
        className="datagrid"
        rows={row}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>


    
    
  );

};

export default List;
