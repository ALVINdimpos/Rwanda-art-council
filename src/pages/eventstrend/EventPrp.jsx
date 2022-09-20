
import React from 'react'
import blackimg from './blackimg.png'
import './event.scss'
import { useState,useEffect } from 'react';
import {ImUpload} from 'react-icons/im'
import { getTocken,eventUrl } from '../../components/token/Token'
import {FiUpload} from 'react-icons/fi'
import axios from 'axios';


function EventPrp() {

    const [titles,setTitles]=useState();
    const [times,setTimes]=useState();
    const [desc,setDesc]=useState();
    const [location,setLocation]=useState();
    const [imFile,setImFile]=useState({})

     


    const titleHandler=e=>{
        setTitles(e.target.value)
    }
   
    const timeHandler=(e)=>{
        setTimes(e.target.value)
    }
    // useEffect(e=>{
    //     setTimes(e.target.value)
    // })
    const handleDesc=(e)=>{
        setDesc(e.target.value)
    }
    // useEffect(e=>setDesc(e.target.value)
    // )
    const handleLocation=(e)=>{
        setLocation(e.target.value)
    }
    // useEffect(e=>        setLocation(e.target.value)
    // )
 
    // useEffect(e=>setTimes(e.target.value))

    // const handleImage=e=>{
    //     // console.log('Image:',URL.createObjectURL((e.target.files[0])))
    //     // setImFile(URL.createObjectURL((e.target.files[0])))
    //     setImFile((e.target.files[0]))
    // }

    let data={
        title:titles,
        description :desc,
        at :times,
        file :imFile,
        location:location,
    }
    const handleDataForm=e=>{
        e.preventDefault()     
        axios.post('https://rwanda-art-api.herokuapp.com/api/events/create',data
            // Headers:{
            //     'Authorization':`Bearer  ${localStorage.getItem('token')}`,
            // },data
        )
        .then(result=>result.data)
       .then(data=>console.log(data)
       .catch(err=>err.message))     
    
    }

 

  return (
    <form  onSubmit={handleDataForm}>
        <div className='eventPage'>
                        <div className="cover-s" >
            <div className='imgEvent'>
            <input type="file"  onChange={(e)=>setImFile(e.target.files[0])} className="file-chooser"/>
            {/* <img src={imFile} className="image"/> */}
           
            </div> 
            <div className='tt'>
        <div className="titledes">
        <label>Title</label>
        <input value={titles} type="text" name='loc' onChange={e=>titleHandler(e)}/>
        </div>
        </div>
        <div className='timeloc'>
            <div className='loc'>
            <label>Location</label>
            <input value={location} type="text" onChange={e=>handleLocation(e)} name='loction' />
            </div>

            <div className='tim'>
            <label>Time/hour</label>
            <input onChange={e=>timeHandler(e)} value={times} type="datetime-local" name='tim' />
            </div>
        </div>
       
       <div className='desc'>
                 <div className='description'>
                <label>Description</label>
                <textarea value={desc}  
                onChange={e=>handleDesc(e)}
                placeholder='type Description ...'>
                </textarea>
            </div>
       </div>
    <div >
        <button className="buttons"type='submit'>Add</button>
        </div>
       
   
            </div>
    </div>
    </form>
    )
}

export default EventPrp