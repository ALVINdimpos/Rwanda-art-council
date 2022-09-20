import './reg.scss'
import React,{ useEffect,useState } from 'react'
import { Container } from '@mui/system'
import FedRegistrationTmp from '../federationRegistration/FedRegistrationTmp'
import FederationAccount from '../federation-account/FederationAccount'
import { FileUploader } from '../federation-upload-file/FileUploader'
import axios from 'axios'
function RegForm() {
    const [page,setPage]=useState(0)
    const [regSuccess,setRegSuccess]=useState('')
    const [isRecorded,setIsRecorded]=useState(false)
    const [myFederation,setMyFederation]=useState([''])
const [formData,setFormData]=useState({
    federation_name:'',
    phone_number:'',
    tinnumber:'',
    email:'',
    number_of_members:20,
    password:'',
    password_confirmation:'',
    file:'',
    image:'',
})
const federationNames=['']

useEffect(()=>{
    fetch('https://rwanda-art-api.herokuapp.com/api/ViewUser',
    {
        method:'GET',
        headers:{
        'Authorization':'Bearer '+localStorage.getItem('token'),
        'Content-Type':'application/json'
    }       
}).then(res=>res.json())
    .then(val=>
          setMyFederation(val.User?.Data)
        )
    .catch(err=>{console.error('mentioned Error.',err)
        setMyFederation('')
})   
  },[] )


  myFederation.forEach(fedNames=>{
    federationNames.push(fedNames.federation_name)
  })

// console.log('fed Names found:',federationNames.find(fed=>fed==='Paining'));








    const pageTitle=['Personal Information','File Uploading','Create Account']
    const displayPage=()=>{
        if(page===0) return <FedRegistrationTmp formData={formData} setFormData={setFormData}/>
        else if(page===1) return <FileUploader formData={formData} setFormData={setFormData}/>
      else if(page===2) return < FederationAccount formData={formData} setFormData={setFormData} />
        

     }     

useEffect(()=>{
    
})







     const handleSubmit=()=>{


        try{
                axios.post('https://rwanda-art-api.herokuapp.com/api/register'
                ,formData,{
                    headers:{
                        "Content-type": "multipart/form-data"
                    }
                }
                )
                .then(res=>res.data)
                .then(data=>setRegSuccess(data.message))
        }catch(err){
            console.log('check this mistake->',err)
        }
        
     }

  return (

    <Container style={{backgroundColor:"white"}}>
        <div className="progressbar"></div>
        <div className='form-container'>
            <div className="result">
                <span>{regSuccess}</span>
            </div>
            <div className="header">
                <h2 >{pageTitle[page]}</h2>
            </div>
            <div className="body">
                <span>Step {page+1}</span>
            {displayPage()}
            </div>
            <div className="footer">
                <button onClick={()=>setPage(current=>current-1)} disabled={page==0}>Prev</button>
                <button onClick={()=>{page===pageTitle.length-1?
                    handleSubmit()
                    :
                 setPage(current=>current+1)}
                   
                } >
                    {page==pageTitle.length-1 ? "Submit" : "Next"}</button>
            </div>
        </div>
        </Container>  
        )
            }


export default RegForm