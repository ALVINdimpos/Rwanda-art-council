import './v.scss'
import React from 'react'
import impala from '../viewing/impala.jpg'

export default function ViewArtist() {
  return (
    <div className="art-page">
        <div className='artide-side'>
         <div className='prof-side'>
         <div className='profile'>
                <div className='prof-image'>
                    <img src={impala} alt='impala arts'/>
                </div>
                <div className='user-name'>
                    Murungi
                </div>

            </div>
         </div>
          <div className='details'>
          <div className='artist-details'>
            <div className='about-me'>
             <h2>About Me</h2>
             </div>
             <div className='details-side'>

                    <div>
                    <span>Full Name:</span>
                    </div>
                   <div><span>Gender:</span>
                   </div>
                    <div>
                    <span>Mobile:</span>
                    </div>
                    <div>
                    <span>Federation:</span>

                    </div>
                    <div>
                    <span>Union:</span>
                    </div>

             </div>
            </div>
          </div>

        </div>
        <div className='qr-side'>QR Code</div>
    </div>
  )
}
