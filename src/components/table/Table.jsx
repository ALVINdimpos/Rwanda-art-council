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

const List = () => {

  const [row,setRow] =useState([])
  const base_uri=`https://rwanda-art-api.herokuapp.com/api/ViewUser`
    
  const myImage='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'      
    function convertDate(dt){
      const date= Date.parse(dt);
      return new Date(date).getFullYear()
    }
console.log('My Token',getTocken())
    useEffect(()=>{
      fetch(base_uri,{
        method: 'GET',
        headers: {
            'Authorization': getTocken(),
            'Content-Type': 'application/json'
        }})
        .then(result=>{
          return result.json()})
        .then(data=>{setRow(data)})
    },[])
  return (
    <TableContainer component={Paper} className="table"
   
    >
      <Table  sx={{ minWidth: 420 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Icon</TableCell>
            <TableCell className="tableCell"> Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Mobile</TableCell>
            <TableCell className="tableCell">Tin</TableCell>
            <TableCell className="tableCell">Member</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Reg Date</TableCell>
            <TableCell className="tableCell">Details</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {row.User?.Data?row.User?.Data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}
              
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={myImage} alt="" className="image" />
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.federation_name}</TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.phone_number}</TableCell>
              <TableCell className="tableCell">{row.tinnumber}</TableCell>
              <TableCell className="tableCell">{row.number_of_members}</TableCell>
              <TableCell className="tableCell">{row.status}</TableCell>
              <TableCell className="tableCell">{convertDate(row.updated_at)}</TableCell>
              <TableCell className="tableCell"><Link className="link" to={`/https://rwanda-art-api.herokuapp.com/api/ViewUser/${row.id}`}>e</Link></TableCell>



            </TableRow>
          )):<>Check Expired Token</>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
