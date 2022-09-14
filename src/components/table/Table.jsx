import "./table.scss";
import { ImPlus } from "react-icons/im";
import {useEffect,useState} from 'react';
import { getTocken } from "../token/Token";
import {FederationRegist} from "../../pages/federationDialogRegistration/FederationRegist";
import FedRegistrationTmp from '../../pages/federationRegistration/FedRegistrationTmp'
import axios from "axios";
import FedAPItable from "../../pages/federationTable/FedAPItable";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const List = () => {
  const hist=useNavigate()
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

    // const actionColumn = [
    //   {
    //     field: "action",
    //     headerName: "Action",
    //     width: 200,
    //     renderCell: (params) => {
    //       return(
    //              <div className="cellAction">                                       
    //             <div
    //               className="deleteButton"
    //               onClick={() => approveFedederation(params.row.id)}>
    //               Approve
    //               </div>
    //               </div>
    //             )
                
    //           }
    //         }
          
    // ];

    return (
    
      <div className="datatable">
      <div className="datatableTitle">
      Federation List
      
        <div className="buttons" onClick={()=>hist("/federation-registration")}>Add Federation
        </div>
      </div>        
      <FedAPItable />
    </div>


    
    
  );

};

export default List;
