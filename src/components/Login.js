import React, {Component, useState} from "react";


function Login () {
  return (
   <center> <div className="loginCard">
      <h2>Login</h2>
      <form>
        <input id="username" placeholder="Username"/>
        <br></br>
        <input id="password" placeholder="Password"/>
      </form>
      <br></br>
      <button id="loginButton">Login</button>
      <br></br>
     
    </div></center>
  )
}

export default Login;


