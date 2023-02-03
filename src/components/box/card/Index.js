import React from 'react'
import  "./Style.css";
 const Index = () => {
  return (
    <div className="containerR">
   <div class="row1-container">
    <div class="box box-down white">
      <h2>First step</h2>
      <p>Register in your Union/ by fulfilling their requirements</p>
      <p>Union Register their artists in rwanda Arts Council website</p>
      <p>Artists pays the registration fees to confirm his/her membership of 10,000RWF</p>
      <p>Artists receive the QR Code from RAC.</p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
    </div>

    <div class="box white">
      <h2>Second step</h2>
      <p>Register in  your Federation/ by fulfilling their requirements</p>
      <p>Your federation will register the union in Rwanda Arts Council (RAC) website</p>
      <p>The Union will wait for RAC approva</p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
    </div>

    <div class="box box-down white">
      <h2>Third step</h2>
      <p>Federation is being register by RAC </p>
      <p>They receive a registration link to Join RAC website </p>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
    </div>
  </div>
  <div class="row2-container">
    <div class="box white">
      <h2>Last step</h2>
      <p>Federation is being register by RAC</p>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/>
    </div>
  </div>
    </div>
  )
}
export default Index;