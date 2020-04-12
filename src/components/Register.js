import React, {Component, useState} from "react";


function Register () {

    const [inputF_name, setInputF_name] = useState("");
    const [inputL_name, setInputL_name] = useState("");
    const [inputUsername, setInputUsername] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [url, setUrl] = useState("http://localhost:5000/register")
    const [response, setResponse] = useState("")

    const registerAccount = async () => {
      // const output = document.getElementById("flaskResponse");
      const configs = {
        method : "POST",
        mode : "cors",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({
          f_name : inputF_name,
          l_name : inputL_name,
          username : inputUsername,
          email : inputEmail,
          password : inputPassword

        }
        )
      }
      try {
       
        console.log(configs, "THESE ARE THE CONFIGS!!!!!>>>>>>>>>>") 
        const response = await fetch(url, configs);
        // const flaskResponse = await response.json();
        // setResponse(flaskResponse["response"]);
      } catch (error) {
        console.log(error);
      }
    
      
    }
    return (
      <div className="Register">
       
        <h1>Register Account</h1>
        <div id="flaskResponse"/>
       <center><form className = "registerForm">
        <input
          type = "text" 
          id="f_name" 
          onChange={e => setInputF_name(e.target.value)}
          placeholder="First Name">
        </input>
        <br></br>
        <input
          type = "text"  
          id="l_name" 
          onChange={e => setInputL_name(e.target.value)}
          placeholder="Last Name">
        </input>
        <br></br>
        <input 
          type = "text"
          id="username" 
          onChange={e => setInputUsername(e.target.value)}
          placeholder="Username">
        </input>
        <br></br>
        <input 
          type = "password"
          id="password" 
          onChange={e => setInputPassword(e.target.value)}
          placeholder="Password">
        </input>
        <br></br>
        <input 
          type = "text"
          id="email" 
          onChange={e => setInputEmail(e.target.value)}
          placeholder="Email">
        </input>
     
      </form></center> 
        <br></br>
        <center>
        <button onClick={()  => registerAccount()} className="registerButton">Register</button>
        </center>

      </div>
      
    )
  }
  
  export default Register;


