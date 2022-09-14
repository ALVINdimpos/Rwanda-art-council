import impala from './impala.jpg'
import React,{useState,useEffect} from 'react'
import './view.css'
import { useParams } from 'react-router-dom'
import { artistData } from '../../datatablesource'
import { convertDate } from '../../components/token/Token'
const View=()=> {
const params=useParams();
let id=params.usId;
const handleSearch=(id)=>{
  return (artistData.find(data=>data.id===id))
}
  let federation=handleSearch(parseInt(id));
console.log('found Federation',federation)



  return (
    
    <div class="regist">
            <div class="harvest">
                <img src={impala} alt="impala art"/>

            </div>
            <div class="recontainer">
                <div class="heading">
                    <span> Federation Review</span>
                </div>
                
                <div class="regiscont">
                    <div class="regpage">
                            <label className='subdetails'>Full names</label>
                        <input readOnly value={federation.federation_name} type="text" name="fn"/>
                    
                            <label className='subdetails'>Tin number</label>
                            <input readOnly type="text" value={federation.tinnumber} name="tin"/>                    
                        <label className='subdetails'>Email</label>
                        <input readOnly type="email"  name="eml" value={federation.email}/>
                        
                                        </div>
                                        <div class="regpage">
                                        <label className='subdetails'>Category</label>  
                                        <input type="email"  name="cat" value={federation.category_id} readOnly/>

                                          <label className='subdetails'>Member Size</label> 
                                          <input readOnly type="text"  name="clst" value={federation.number_of_members }/>

 
                                          <label className='subdetails'>Registered Date</label> 
                                          <input type="text" readOnly value={convertDate(federation.created_at)}  name="eml"/>
                                          

                                       </div>
                                       <div class="btn">
                  <input type="button" style={{fontFamily:"railway",fontSize:"20px" ,margin:"0 20px"}} value="Approve" />                 
                  <input type="button" style={{fontFamily:"railway",fontSize:"20px",margin:"0 20px"}} value="Reject" />                 

                        </div>
                                          
                </div>
               </div>
                
            </div>

    )
}

export default View