import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import FedSidebar from "../sideFedbar/FedSidebar";
import FedNavbar from "../navigatebar/FedNavbar";
import ChartsData from "../charts/ChartsData";
import Artists from "../artists/ArtistsTable";
import {BiPlusMedical} from 'react-icons/bi'
import {RiUpload2Fill} from 'react-icons/ri'
import { Data } from "../DumFederation";
import * as XLSX from 'xlsx'
import UnionForm from "../unionbyDialog/UnionForm";
const HomeFed = () => {
// try to handle union form page for registration

// const handleUnionForm=()=>{
//   return (<UnionForm/>)
//   // console.log('Hello brq');
// }




  const handleFile= async e=>{
    const file=e.target.files[0]
    const data=await file.arrayBuffer()

    const workBook=XLSX.read(data)
    // console.log('MySheet',workBook.SheetNames[0])
    const wSheet=workBook.Sheets[workBook.SheetNames[0]]

    const jSonData=XLSX.utils.sheet_to_json(wSheet);

    console.log('Json Data',jSonData);

    const workSheet=XLSX.utils.json_to_sheet(jSonData)
    const wb=XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb,workSheet,"TestedData")


    


  
  }
 function handleClick(){
  const wShet= XLSX.utils.json_to_sheet(Data)
  XLSX.utils.sheet_add_aoa(wShet,[["Id","First_Name","Last_Name",
"email","mobile","Gender","Adress",
"National_ID","Federation","Union"]],{origin:"A1"})
  const workB=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workB,wShet,"Draft")

  XLSX.writeFile(workB,"DumedData.xlsx")



 



 }

  return (
    <div className="home">
{/* <>
   <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
</> */}


      <FedSidebar />
      <div className="homeContainer">
            <FedNavbar />

          <div className="charts">
          <ChartsData />
          </div>
          <div className="artist-table">
            <div className='tbl-title'>
            {/* <Link to="/adartist">  this OG before dialog trial*/}
            {/* <div className="btn" onClick={()=>handleUnionForm()}><BiPlusMedical style={{fontSize:"large", paddingRight:"5px"}}/> Add New</div>   */}
            <div><UnionForm /></div>  
            
            <div className="upl-CSV">
            <input  type='file' onChange={e=>handleFile(e)}/> 
            <button onClick={handleClick} className="btn-upload"><RiUpload2Fill style={{fontSize:"large"}} /></button>
            </div>
            </div>
          <Artists/>
          </div>


         
      </div>
  
    </div>
  );
};

export default HomeFed;
