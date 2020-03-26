import React, {Component, useState} from 'react'; 
import {StreamApp, StatusUpdateForm, FlatFeed} from 'react-activity-feed';

import { NavLink } from 'react-router-dom';


// const [url, setURL] = useState("http://localhost:5000/feed")
// function Feed (){
// const [feed, setFeed] = useState([]);



// return(



// )
// }


// function Feed () {

   
//     const [inputUsername, setInputUsername] = useState("");
//     const [url, setUrl] = useState("http://localhost:5000/register")
//     const [response, setResponse] = useState("")
  
//     const newsFeed = async () => {
//       const output = document.getElementById("flaskResponse");
//       const configs = {
//         method : "POST",
//         mode : "cors",
//         headers : {"Content-Type" : "application/json"},
//         body : JSON.stringify({
         
//           username : inputUsername,
//           email : inputEmail,
//           password : inputPassword
//         })
//       }
//       try {
//         JSON.parse(configs);
//         const response = await fetch(url, configs);
//         const flaskResponse = await response.json();
//         setResponse(flaskResponse["response"]);
//       } catch (error) {
//         console.log(error);
//       }
//       output.innerHTML += "<p>" + response + "</p>";
//     }
//     return (
//       <div className="Register">
       
//         <h2>Register Account</h2>
//         <div id="flaskResponse"/>
//       </div>
//     )
//   }
  
//   export default Feed;


