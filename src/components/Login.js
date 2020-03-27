import React, {Component, useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
function Login () {
const dispatch = useDispatch()
const token = useSelector(state => state.token)

const [inputUsername, setInputUsername] = useState("");
const [inputPassword, setInputPassword] = useState("");
const [loginurl, setLoginUrl] = useState("http://localhost:5000/login")
const [logouturl, setLogoutUrl] = useState("http://localhost:5000/logout")
const [isLoading, setIsLoading] = useState(true);
const [response, setResponse] = useState("")


useEffect(() => {
const tokenAuthenticate = async () =>{
if (token === "" || token === undefined){
// window.sessionStorage.setItem("token", json.token)
}else{
  setIsLoading(true)
  try{
    const response = await fetch(`http://localhost:5000/token/${token}`);
    const flaskResponse = response.json();
  }catch(error){
    console.log(error)
  }
  setIsLoading(false);
}
}
tokenAuthenticate()
}, 
[token])

const loginAccount = async () =>{

const configs = {
method: "POST",
mode: "cors",
headers :{"Content-Type" : "application/json"},
body: JSON.stringify({
username : inputUsername,
password: inputPassword
})
}
try {
       
  console.log(configs, "THESE ARE THE CONFIGS!!!!!>>>>>>>>>>") 
  const response = await fetch(loginurl, configs);
  const flaskResponse = await response.json();
  setResponse(flaskResponse["response"]);
  sessionStorage.setItem("token", flaskResponse["token"])
  dispatch({
    type: 'TOKEN',
    token: flaskResponse["token"][0]
  })
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


