import React from 'react'
import './up.scss'

export const FileUploader = ({formData,setFormData}) => {
  return (
        <div className='file-container'>
          <div className="file-header">
            <span>company logo</span>
          </div>
        <div className="up-file">
        <input type="file" accept="image/*" id="logo"
        onChange={e=>setFormData({...formData,file:(e.target.files[0])})}/>
                <label for="logo">Upload Logo</label>
        </div>
        <div className="up-file">
        <label>Upload Image</label>
        <input type="file"
        onChange={e=>setFormData({...formData,image:(e.target.files[0])})}
        />
        </div>
        </div>
    )
}
