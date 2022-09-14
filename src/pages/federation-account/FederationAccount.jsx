import './acc.scss'
import React, { useEffect, useState } from 'react'

function FederationAccount({formData,setFormData}) {

  
  return (
   <>
    <form>
    <div className='eventPage'>
    <div className="cover-s" >
<div className='tt'>
<div className="titledes">
<label>Email</label>
<input required value={formData.email}
 onChange={e=>setFormData({...formData,email:e.target.value})} 
 type="email" />
</div>
</div>

<div className='tt'>
<div className="titledes">
<label>Password</label>
<input  type="password"
    value={formData.password}
    onChange={e=>setFormData({...formData,password:e.target.value})}
required />
</div>
</div>
<div className='tt'>
<div className="titledes">
<label>Confirm Password</label>
<input  type="password" required 
value={formData.password_confirmation}
onChange={e=>setFormData({...formData,password_confirmation:e.target.value})}
/>
</div>
</div>



    </div>
</div>
</form> 
   </>
    )
}

export default FederationAccount