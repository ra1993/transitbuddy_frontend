import React, {Component, useState, useEffect} from "react";
const [url, setUrl] = useState("http://localhost:5000/incoming/time");


function IncomingTime(props) {


const [time, setTime] = useState("");


const configs = {
method : "GET",
mode : "cors",
headers : {"Content-Type" : "application/json"},
train = props.train,
station = props.station

}


// useEffect(() => {
// if (props.train !== undefined){
//   setTrain 
// }

  
}

const getTime = () =>  {
time = await fetch(url+"/"+train+"/"+station, configs)
return time

}

  return (
  <div id = "time">
  <label  
  {...setTime}
  onChange = {e => getTime(e.target.value)}
  ></label>

  </div>
  )
}

export default IncomingTime;