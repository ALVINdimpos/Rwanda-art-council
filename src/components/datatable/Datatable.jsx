import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
const Datatable = () => {
  const [rowData,setRowData]=useState([])
  const [data, setData] = useState(userRows);

//     const base_uri=`https://rwanda-art-api.herokuapp.com/api/ViewUser`
    
  
// const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcndhbmRhLWFydC1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvbG9naW4iLCJpYXQiOjE2NjA0MjE5MTcsImV4cCI6MTY2MDQyNTUxNywibmJmIjoxNjYwNDIxOTE3LCJqdGkiOiJ5MjBza3V1dXlHVFZHQzhqIiwic3ViIjoiMjQiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3IiwidXNlciI6eyJpZCI6MjQsImZlZGVyYXRpb25fbmFtZSI6IlJ3YW5kYUFydENvdW5jaWwiLCJwaG9uZV9udW1iZXIiOiIwNzg1NDE5NzczIiwiaW1hZ2UiOiJqby5qcGciLCJlbWFpbCI6ImFkbWluOEBnbWFpbC5jb20iLCJ0aW5udW1iZXIiOjExMTExLCJmaWxlIjoia2tray5qcGciLCJudW1iZXJfb2ZfbWVtYmVycyI6MTIxLCJjYXRlZ29yeV9pZCI6bnVsbH19.7915mXfNjW1eOcEKqZI9D-vLGwsfYKqk3j5iYLJ9_Ac'
//     const bearer = 'Bearer ' + token;

//   useEffect(()=>{
//     fetch(base_uri,{
//       method: 'GET',
//       headers: {
//           'Authorization': bearer,
//           'Content-Type': 'application/json'
//       }})
//       .then(result=>{
//         return result.json()})
//       .then(data=>{setRowData(data)})
//   },[])
//   const urlRows=rowData.User?.Data;
//   console.log(urlRows)

  


  const handleDelete = (id) => {
    setData(rowData.filter((item) => item.id !== id));
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
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
