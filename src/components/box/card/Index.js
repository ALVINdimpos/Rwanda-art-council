import React from 'react'
import  "./Style.css";
 const Index = () => {
  return (
    <div className="containerR">
   <div class="row1-container">
    <div class="box box-down white">
      <h2>First step</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Curabitur consequat, orci eu efficitur pulvinar, sem nibh. 
     </p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
    </div>

    <div class="box white">
      <h2>Second step</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Curabitur consequat, orci eu efficitur pulvinar, sem nibh. </p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
    </div>

    <div class="box box-down white">
      <h2>Third step</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Curabitur consequat, orci eu efficitur pulvinar, sem nibh. </p>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
    </div>
  </div>
  <div class="row2-container">
    <div class="box white">
      <h2>Last step</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Curabitur consequat, orci eu efficitur pulvinar, sem nibh. </p>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/>
    </div>
  </div>
    </div>
  )
}
export default Index;