import React, {Component, useState} from "react";




function Login () {

const [inputUsername, setInputUsername] = useState("");
const [inputPassword, setInputPassword] = useState("");
const [url, setUrl] = useState("http://localhost:5000/login")
// const [response, setResponse] = useState("")
const loginAccount = async () =>{

const configs = {
method: "GET",
mode: "cors",
headers :{"Content-Type" : "application/json"},
data: JSON.stringify({
username : inputUsername,
password: inputPassword
})
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
   <center> <div className="loginCard">
      <h2>Login</h2>
      <form className = "loginForm">
        <input id="username" 
        type = "text"
        placeholder="Username"
        onChange = {e => setInputUsername(e.target.value)}
        ></input>

        <br></br>

      <input id="password" 
      type = "password"
      placeholder="Password" 
      onChange = {e => setInputPassword(e.target.value)}

      ></input>
      </form>
      <br></br>
      <button onClick={() => loginAccount()}id="loginButton">Login</button>
      <br></br>
     
    </div></center>
  )
}

export default Login;


