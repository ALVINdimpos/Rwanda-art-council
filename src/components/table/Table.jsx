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
        function convertDate(dt){
      const date= Date.parse(dt);
      return new Date(date).getFullYear()
    }
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
