import './reg.scss'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FedRegistrationTmp({formData,setFormData}) {
    const handleImageLogo=e=>{
        setImage(e.target.files[0])
        // console.log('file Image',file)
        // setImage(URL.createObjectURL(file))
        // console.log('URL file',URL.createObjectURL(file))
    }





    // const [isLodoing,setIsLoading]=useState(false)


//   const fd=new FormData()
//     fd.append('federation_name',fedName),
//     fd.append('phone_number',mobile),
//     fd.append('tinnumber',refCode),
//     fd.append('email',emails),
//     fd.append('number_of_members',20),
//     fd.append('password','1111111111'),
//     fd.append('password_confirmation','1111111111'),
//     fd.append('file',image),
//     fd.append('image',image)
    
// const Token= localStorage.getItem('token');

//     const handleSubmit=e=>{
//         e.preventDefault()
//        axios.post('https://rwanda-art-api.herokuapp.com/api/register',fd)
//         .then(res=>console.log('resut Object',res.data))
//         .then(data=>console.log(data))
//     }
  
  return (
   <>
    <div className='eventPage'>
    <div className="cover-s" >
    <div className='tt'>
<div className="titledes">
<label>Federation Name</label>
<input  type="text" value={formData.federation_name}
 onChange={e=>setFormData({...formData,federation_name:e.target.value})} required />
</div>
</div>
<div className='tt'>
<div className="titledes">
<label>Email</label>
<input required 
value={formData.email} type="email" 
onChange={e=>setFormData({...formData,email:e.target.value})} />
</div>
</div>
<div className='tt'>
<div className="titledes">
<label>Mobile</label>
<input  required type="text"  min="10"
  value={formData.phone_number} 
  onChange={e=>setFormData({...formData,phone_number:e.target.value})}/>
</div>
</div>
<div className='tt'>
<div className="titledes">
<label>Reference Code</label>
<input  type="text" value={formData.tinnumber} 
onChange={e=>setFormData({...formData,tinnumber:e.target.value})} required />
</div>
</div>
</div>
</div>
   </>
    )
}

export default FedRegistrationTmp