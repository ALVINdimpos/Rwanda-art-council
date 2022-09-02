import React from "react";
import "./regist.scss"
import { Link } from "react-router-dom";
import FedSidebar from "../sideFedbar/FedSidebar";
import FedNavbar from "../navigatebar/FedNavbar";
import ChartsData from "../charts/ChartsData";
import Artists from "../artists/ArtistsTable";
import {BiPlusMedical} from 'react-icons/bi'
import {RiUpload2Fill} from 'react-icons/ri'
import { Data } from "../DumFederation";
import * as XLSX from 'xlsx'
import ArtisistReg from "../../artistregistration/ArtisistReg";
const RegisterArt = () => {
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

          <div className="charts">
          <ArtisistReg/>
          </div>
   


         
      </div>
  
    </div>
  );
};

export default RegisterArt;
