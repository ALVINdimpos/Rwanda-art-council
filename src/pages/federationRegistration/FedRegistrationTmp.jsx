import './reg.scss'
import React from 'react'

function FedRegistrationTmp({formData,setFormData}) {

  return (
   <>
    <div className='reg-Page'>
    <div className="cover-pad" >
    <div className='tt-side'>
<div className="des">
<label>Federation Name</label>
 <select 
 value={formData.federation_name}
 style={{color:"black"}}
 onChange={e=>setFormData({...formData,federation_name:e.target.value})}>
 <option defaultValue='-1'>Select category</option>
              <option value="1">PLASTIC ARTS</option>
              <option value="MUSIC/ DANCE">MUSIC & DANCE</option>
              <option value="ACTING/ DRAMA">ACTING & DRAMA</option>
              <option value="CINEMATOGRAPHY/ PHOTOGRAPHY">CINEMATOGRAPHY & PHOTOGRAPHY</option>
              <option value="LITERATURE">LITERATURE</option>
              <option value="FASHION">FASHION</option>
 </select>
</div>
</div>
<div className='tt-side'>
<div className="des">
<label>Email</label>
<input required style={{color:"black"}}
value={formData.email} type="email" 
onChange={e=>setFormData({...formData,email:e.target.value})} />
</div>
</div>
<div className='tt-side'>
<div className="des">
<label>Mobile</label>
<input style={{color:"black"}}  required type="text"  min="10"
  value={formData.phone_number} 
  onChange={e=>setFormData({...formData,phone_number:e.target.value})}/>
</div>
</div>
<div className='tt-side'>
<div className="des">
<label>Reference Code / Tin</label>
<input  type="text" style={{color:"black"}}  value={formData.tinnumber} 
onChange={e=>setFormData({...formData,tinnumber:e.target.value})} required />
</div>
</div>
</div>
</div>
   </>
    )
}

export default FedRegistrationTmp