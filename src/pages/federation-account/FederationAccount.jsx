import './acc.scss'
import React, { useEffect, useState } from 'react'

function FederationAccount({formData,setFormData}) {

  
  return (
   <>        
      <div className='account-Page'>
    <div className="cover-padding" >

<div className='tt-side-up'>
<div className="des">
<label>Email</label>
<input required style={{color:"black"}}
value={formData.email} type="email" 
onChange={e=>setFormData({...formData,email:e.target.value})} />
</div>
</div>
<div className='tt-side-up'>
<div className="des">
<label>Password</label>
<input style={{color:"black"}}  required type="password"  min="10"
  value={formData.password} 
  onChange={e=>setFormData({...formData,password:e.target.value})}/>
</div>
</div>
<div className='tt-side-up'>
<div className="des">
<label>re-Password</label>
<input style={{color:"black"}}  required 
type="password"  min="10"
  value={formData.password_confirmation} 
  onChange={e=>setFormData({...formData,password_confirmation:e.target.value})}/>
</div>
</div>

</div>
</div>
   </>
    )
}

export default FederationAccount