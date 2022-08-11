import React from 'react'
import "./LoginStyle.css"

function Login2() {
  return (
<div>
  <div className="container1">
    <div className="card">
      <div className="top-row">
        <h1>Hello again</h1>
        <p>Log in with your email and password</p>
      </div>
      <div className="card-details">
        <input type="text" placeholder="Enter your name" />
        <i className="fa fa-envelope" />
      </div>
      <div className="card-details">
        <input type="password" id="password-input" placeholder="Enter your password" />
        <i className="fa fa-lock" />
        <span><small className="fa fa-eye-slash passcode" /></span>
      </div>
      <p className="forget">Forgot your password?</p>
      <button className="sign-in">Sign in</button>
      <p className="sign-up">Dont't have an account?<a href="#"> Sign up</a></p>
    </div>
  </div>
</div>

  )
}

export default Login2