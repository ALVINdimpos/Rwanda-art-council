import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import FedSidebar from "../sideFedbar/FedSidebar";
import FedNavbar from "../navigatebar/FedNavbar";
import ChartsData from "../charts/ChartsData";
import { Data } from "../DumFederation";
import UnionAdd from "../unionAddition/UnionAdd";
import {RiUpload2Fill} from 'react-icons/ri'
import * as XLSX from 'xlsx'
import UnionForm from "../unionbyDialog/UnionForm";

import Artists from "../artists/ArtistsTable";
import {BiPlusMedical} from 'react-icons/bi'
// 
import { dataUnion } from '../unionDetails'
import UnionAPI from "../../union-api-data/UnionAPI";
import { Container } from "@mui/system";

const HomeFed = () => {
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
      <FedSidebar />
      <div className="homeContainer">
            <FedNavbar />

        <Container>
            <div className="charts">
          <ChartsData />
          </div>
         

          <div className="artist-table">
            <div className='tbl-title'>
           
            <div>
              <UnionForm title='Union Registration'>
                <UnionAdd />
              </UnionForm >

            </div>  
            <div className="upl-CSV">
            <input  type='file' onChange={e=>handleFile(e)}/> 
            <button onClick={handleClick} className="btn-upload"><RiUpload2Fill style={{fontSize:"large"}} /></button>
            </div>
            </div> 
           <UnionAPI/>
          </div>
        </Container>
         
      </div>
  
    </div>
  );
};

export default HomeFed;
