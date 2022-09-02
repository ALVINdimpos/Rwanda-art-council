import './union.scss'
import React from 'react'
import FedSidebar from '../sideFedbar/FedSidebar'
import FedNavbar from '../navigatebar/FedNavbar'
import EventPrp from '../../eventstrend/EventPrp'
import UnionAdd from '../unionAddition/UnionAdd'

export default function Union() {
  return (
<>
<div className="union-home">
    <FedSidebar/>
    <div className='union-body'>
        <FedNavbar/>
    
            <div className='add-union'>
                <UnionAdd/>
                </div>
    </div>

</div>
</>

  )
}
