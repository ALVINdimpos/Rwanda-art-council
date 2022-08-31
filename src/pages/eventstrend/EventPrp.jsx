
import React from 'react'
import blackimg from './blackimg.png'
import './event.scss'
import { useState,useEffect } from 'react';
import {ImUpload} from 'react-icons/im'
import { getTocken,eventUrl } from '../../components/token/Token';
import {FiUpload} from 'react-icons/fi'


function EventPrp() {

    const [titles,setTitles]=useState();
    const [times,setTimes]=useState();
    const [desc,setDesc]=useState();
    const [location,setLocation]=useState();
    const [imFile,setImFile]=useState()

     


    const titleHandler=e=>{
        setTitles(e.target.value)
    }
    // useEffect((e)=>{
    //     setTitles(e.target.value)
    // },[])
    
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

    const handleImage=e=>{
        console.log('Image:',URL.createObjectURL((e.target.files[0])))
        setImFile(URL.createObjectURL((e.target.files[0])))
    }


    const handleDataForm=e=>{
        e.preventDefault()
        let data={
            title:titles,
            description :desc,
            at :times,
            file :imFile,
            location:location,
        }
    //     fetch(eventUrl,{
    //         method:'POST'     ,    
    //         // mode:'cors',  
    //         headers:{
    //             // "Access-Control-Allow-Origin": 'http://localhost:3000',
    //             // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //             // 'Access-Control-Allow-Credentials': true,
    //             'Content-Type':'application/json',
    //             'Authorization':getTocken()
    //         },
    //         body:JSON.stringify(event)
    //         //ADD bodyJSON.stringify()
    //     }).then(result=>{
    //         if(!result.ok) throw new Error('This Exception rose',result.statusText)
    //         console.log('my found result',result)
    //     })
    //     .then(data=>{return data.json()}).then(
    //         data=>console.log(data).catch(err=>err.message)
    //     )
        

        
        // const data={
          
        // }



        // console.log('img File',imFile)
        // console.log('My Data',data)
    }

 

  return (
    <form  onSubmit={handleDataForm}>
        <div className='eventPage'>
            <div className="title">
                <span>Event Preparation</span>
            </div>
            <div className="cover-s" >
            <div className='imgEvent'>
            <input type="file"  onChange={handleImage} className="file-chooser"/>
            <img src={imFile } className="image"/>
            {/* blackimg */}
            {/* imFile */}
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
    <div className='buttons'>
        <input type='submit' className='btn' value="Submit" />
    </div>
       
   
            </div>
    </div>
    </form>
    )
}

export default EventPrp