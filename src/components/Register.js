import React, {Component, useState} from "react";


function Register(props) {

    const [url, setUrl] = useState("http://localhost:5000/register_user")
    const [inputF_name, setInputF_name] = ("");
    const [inputL_name, setInputL_name] = ("");
    const [inputUsername, setInputUsername] = ("");
    const [inputPassword, setInputPassword] = ("");
    const [inputEmail, setInputEmail] = useState("");
    const [response, setResponse] = useState("");

    const registerAccount = async () =>{
        const output = document.getElementById("flaskResponse");
        const configs = {
        body : JSON.stringify({
        f_name : inputF_name,
        l_name : inputL_name,
        username : inputUsername,
        password : inputPassword,
        email : inputEmail
        })
        }

    }

    try{
    const response = await fetch(url, configs);
    const flaskResponse = await response.json();
    setResponse(flaskResponse['response'])
    } catch (error){

        output.innerHTML += "<p>" + response + "<p>";
    }
    return (

        <h3>Register Account</h3>
        <div id = "flaskResponse">
        <form>
        <input 
          id="f_name" 
          onChange={e => setInputF_name(e.target.value)}
          placeholder="First Name">
        </input>

        <input 
          id="l_name" 
          onChange={e => setInputL_name(e.target.value)}
          placeholder="Last Name">
        </input>

        <input 
          id="username" 
          onChange={e => setInputUsername(e.target.value)}
          placeholder="Username">
        </input>

        <input 
          id="password" 
          onChange={e => setInputPassword(e.target.value)}
          placeholder="Password">
        </input>

        <input 
          id="email" 
          onChange={e => setInputEmail(e.target.value)}
          placeholder="Email">
        </input>
     
      </form>  
      </div>
   
   <br></br>
   <button onClick={() => registerAccount()} id="registerButton">Register</button>
    );
  
  }

  export default Register;