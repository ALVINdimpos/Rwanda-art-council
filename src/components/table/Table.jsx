import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {useEffect,useState} from 'react'

const List = () => {

  const [row,setRow] =useState([])
  const base_uri=`https://rwanda-art-api.herokuapp.com/api/ViewUser`
    
const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcndhbmRhLWFydC1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvbG9naW4iLCJpYXQiOjE2NjA2NDY1ODMsImV4cCI6MTY2MDY1MDE4MywibmJmIjoxNjYwNjQ2NTgzLCJqdGkiOiJhclNmMmw2dUNFZE02TnVUIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJ1c2VyIjp7ImlkIjoxLCJmZWRlcmF0aW9uX25hbWUiOiJSd2FuZGFBcnRDb3VuY2lsIiwicGhvbmVfbnVtYmVyIjoiMDc4NTQxOTc3MyIsImltYWdlIjoiam8uanBnIiwiZW1haWwiOiJhZG1pbjhAZ21haWwuY29tIiwidGlubnVtYmVyIjoxMTExMSwiZmlsZSI6Imtra2suanBnIiwibnVtYmVyX29mX21lbWJlcnMiOjEyMSwiY2F0ZWdvcnlfaWQiOm51bGx9fQ.V1jicmkoibsjBGUutxQZ_3AJXHDG-DT6oE-Vyx3QBVk'

      const bearer = 'Bearer ' + token;
  
    useEffect(()=>{
      fetch(base_uri,{
        method: 'GET',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        }})
        .then(result=>{
          return result.json()})
        .then(data=>{setRow(data)})
    },[])
  return (
    <TableContainer component={Paper} className="table"
   
    >
      <Table  sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Federation Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Register Date</TableCell>
            <TableCell className="tableCell">Tin</TableCell>
            <TableCell className="tableCell">Members</TableCell>
            <TableCell className="tableCell">Category</TableCell>
            <TableCell className="tableCell">Updated Date</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {row.User?.Data?row.User?.Data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.image} alt="" className="image" />
                  {row.id}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.federation_name}</TableCell>
              <TableCell className="tableCell">{row.phone_number}</TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.number_of_members}</TableCell>
              <TableCell className="tableCell">{row.phone_number}</TableCell>
              <TableCell className="tableCell">{row.tinnumber}</TableCell>
              <TableCell className="tableCell">{row.updated_at}</TableCell>
            </TableRow>
          )):<>No Data Found</>}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
