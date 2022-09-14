import React from 'react'
import './up.scss'

export const FileUploader = ({formData,setFormData}) => {
  return (
        <div className='file-container'>
        {/* <div className="up-file">
        <label>Upload Logo</label>
        <input type="file" 
         value={formData.file}
        onChange={(e)=>setFormData({...formData,file:e.target.files[0]})}/>
        </div> */}
        <div className="up-file">
        <label>Upload Image</label>
        <input type="file" 
        value={formData.image}
        onChange={e=>setFormData({...formData,Image:e.target.files[0]})}
        />
        </div>
        </div>
    )
}
