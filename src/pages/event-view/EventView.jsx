import './ev.scss'
import React from 'react'

function EventView() {
  return (
    <div className='eventPage'>
    <div className="cover-s" >
<div className='imgEvent'>
<input type="file"  onChange={(e)=>setImFile(e.target.files[0])} className="file-chooser"/>
{/* <img src={imFile} className="image"/> */}

</div> 
<div className='tt'>
<div className="titledes">
<label>Title</label>
<input value={titles} type="text" name='loc' onChange={e=>titleHandler(e)}/>
</div>
</div>
<div className='timeloc'>
<div className='loc'>
<label>Location</label>
<input value={location} type="text" onChange={e=>handleLocation(e)} name='loction' />
</div>

<div className='tim'>
<label>Time/hour</label>
<input onChange={e=>timeHandler(e)} value={times} type="datetime-local" name='tim' />
</div>
</div>

<div className='desc'>
<div className='description'>
<label>Description</label>
<textarea value={desc}  
onChange={e=>handleDesc(e)}
placeholder='type Description ...'>
</textarea>
</div>
</div>
<div >
<button className="buttons"type='submit'>Add</button>
</div>


</div>
</div>

    )
}

export default EventView