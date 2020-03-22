import React, {Component, useState} from "react";


function IncomingTime() {
const [time, setTime] = useState("");
const [url, setUrl] = useState("http://localhost:5000/incoming/time")
const [response, setResponse] = useState("");

const trainTime = async () => {

const configs = {
method : "GET",
mode : "cors",

}
try {
  const response = await fetch(url+ configs)
} catch (error) {
  console.log(error);
}

}

  return (
    <center>
    <div id = "trainSelect" className = "dropBtn">
 
   <p>Time should print here</p>
    
    </div></center>
  );
}

export default IncomingTime;