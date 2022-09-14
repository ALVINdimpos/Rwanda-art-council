import { useAutho } from "../authenticate/Auths";
import React ,{useEffect}from 'react'
import { useNavigate,useLocation } from "react-router-dom";

function RequireAuth({children}) {
    
    const auth=useAutho()
    const navigate=useNavigate()
    // const location=useLocation()
    useEffect(()=>{
        if(!auth.user){
            return navigate('/Login',{replace:true })
        }
      return children
    
    },[]) 


    if(!auth.user){
        return navigate('/Login',{replace:true })
    }
  return children
 


  
}


export default RequireAuth
