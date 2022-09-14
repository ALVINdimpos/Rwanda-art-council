import './reg.scss'
import React from 'react'
import { useState } from 'react'
import { Container } from '@mui/system'
import FedRegistrationTmp from '../federationRegistration/FedRegistrationTmp'
import FederationAccount from '../federation-account/FederationAccount'
import { FileUploader } from '../federation-upload-file/FileUploader'
import impala from '../../components/sidebar/logo.png'
import axios from 'axios'

function RegForm() {
    const [image,setImage]=useState(impala)
    const [page,setPage]=useState(0)
    const [isSubmitting,setIsSubmitting]=useState(false)
const [formData,setFormData]=useState({
    federation_name:'',
    phone_number:'',
    tinnumber:'',
    email:'',
    number_of_members:20,
    password:'',
    password_confirmation:'',
    file:image,
    image:image,
})


    const pageTitle=['Personal Information','Create Account','Other']
    const displayPage=()=>{
        if(page===0) return <FedRegistrationTmp formData={formData} setFormData={setFormData}/>
        // else if(page===1) return <FileUploader formData={formData} setFormData={setFormData} />
        else if(page===1) return <FederationAccount formData={formData} setFormData={setFormData}/>
      else if(page===2) return <>
        <span>Thanks</span>
        </>

     }
    //  function handleFormDatas(){
    //     return <form onSubmit={handleSubmit}>
    //             {displayPage()}
    //     </form>
    //  }


 
     const handleSubmit=e=>{
        setIsSubmitting(true)
        axios.post('https://rwanda-art-api.herokuapp.com/api/register',formData)
         .then(res=>{
            console.log('resut Object',res.data)
            setIsSubmitting(false)
        })
         .then(data=>console.log(data))
         .catch(err=>console.error(err.message))
     }

  return (

    <Container style={{backgroundColor:"white"}}>
        <div className="progressbar"></div>
        <div className='form-container'>
            <div className="header">
                <h2 >{pageTitle[page]}</h2>
            </div>
            <div className="body">
            {displayPage()}
            </div>
            <div className="footer">
                <button onClick={()=>setPage(current=>current-1)} disabled={page==0}>Prev</button>
                <button type={page==pageTitle.length -1? "submit":"button" } 
                onClick={()=>
                 {page===pageTitle.length-1?
                    handleSubmit
                    :
                 setPage(current=>current+1)}
                   
                } >
                    {page==pageTitle.length-1 ? "Submit" : "Next"}</button>
            </div>
        </div>
        </Container>  )
}

export default RegForm