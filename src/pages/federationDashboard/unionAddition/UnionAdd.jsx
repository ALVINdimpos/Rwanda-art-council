import  './unionAdd.scss'
import React from 'react'
import { province,district } from '../address/Location';
import { useState,useEffect } from 'react';

export default function UnionAdd() {
const [provence,setProvence]=useState([]);
const [dist,setDist]=useState([]);
const [sector,setSector]=useState();



useEffect(()=>{
    setProvence(province)
},[])

function handleCategory(id){
     setDist(district.filter(ids=>(ids.provID===parseInt(id))))    
}







  return (
        <form>
            <div className='eventPage'>
            <div className="title">
                <span>Union Registration</span>
            </div>
            <div className="cover-s" >
            <div className='imgEvent'>
            <input type="file"   className="file-chooser"/>
      
            </div> 
            <div className='tt'>
        <div className="titledes">
        <label>Name</label>
        <input  type="text" name='loc' />
        </div>
        </div>
        <div className='tt'>
        <div className="titledes">
        <label>Email</label>
        <input  type="text" name='loc' />
        </div>
        </div>
        <div className='timeloc'>
            <div className='tim'>
            <label>Province</label>
            <select id="cat" onChange={e=>handleCategory(e.target.value)}  required>
                                            
                                            <option value="-1" selected>Selecect Provice</option>
                                            { provence && provence!==undefined 
                                                ?provence.map((value,index)=>{
                                                    return(
                                                        <option key={index} value={value.id}>{value.name}</option>
                                                    )
                                                    }):"No Category Chosen"}
                                        
                                         </select>  
            </div>

            <div className='tim'>
            <label>District</label>
            <select id="clid"  onChange={e=>e.target.value} required>
                                                <option value="-1" selected>Select District</option>
                                                {dist&& dist!==undefined 
                                                ?dist.map((value,index)=>{
                                                    return(
                                                        <option key={index} value={value.id}>{value.name}</option>
                                                    )
                                                }):"No Cluster has Chosen yet"
                                                }

                                            </select>
            </div>
            <div className='tim'>
            <label>Sector</label>
            <select>
                <option selected value="-1">Select Sector</option>
                <option>Sector is goin' be OFF</option>
            </select>
            </div>
        </div>
       
       <div className='desc'>
                 <div className='description'>
                <label>Union Type</label>
                {/* <textarea 
                
                placeholder='type Description ...'>
            </textarea> */}
            </div>
       </div>
    <div className='buttons'>
        <input type='submit' className='btn' value="Regist" />
    </div>
       
   
            </div>
    </div>
        </form>    

    )
}
