import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const Datatable = () => {
  // const [data, setData] = useState(userRows);

//begin
const [row,setRow] =useState([])
const base_uri=`https://rwanda-art-api.herokuapp.com/api/ViewUser`
  
const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcndhbmRhLWFydC1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvbG9naW4iLCJpYXQiOjE2NjA5MDU4OTcsImV4cCI6MTY2MDkwOTQ5NywibmJmIjoxNjYwOTA1ODk3LCJqdGkiOiJtRHM0cmZWRXdJVE5XSVA3Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJ1c2VyIjp7ImlkIjoxLCJmZWRlcmF0aW9uX25hbWUiOiJSd2FuZGFBcnRDb3VuY2lsIiwicGhvbmVfbnVtYmVyIjoiMDc4NTQxOTc3MyIsImltYWdlIjoiam8uanBnIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ0aW5udW1iZXIiOjExMTExLCJmaWxlIjoia2tray5qcGciLCJudW1iZXJfb2ZfbWVtYmVycyI6MTIxLCJjYXRlZ29yeV9pZCI6bnVsbCwic3RhdHVzIjoiUGVuZGluZyJ9fQ.rH7UqeXf3SFdlxOD20ll-DtHKYjd2CrDprEoQ2W4vQQ'
localStorage.setItem('token','Bearer' +token)



// const myImage='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'      

  useEffect(()=>{
    fetch(base_uri,{
      method: 'GET',
      headers: {
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
      }})
      .then(result=>{
        return result.json()})
      .then(data=>{setRow(data)})
  },[])

//end



console.log('All Data',row.User?.Data)


  const handleDelete = (id) => {
    setRow(row.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        //row.User?.Data
        rows={row}
        columns={userColumns.concat(actionColumn)}
        pageSize={12}
        rowsPerPageOptions={[12]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
