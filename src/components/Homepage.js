import React, {Component, useState} from "react";


function Homepage() {
const [inputTrain, setInputTrain] = useState("");
const [url, setUrl] = useState("http://localhost:5000/train")
const [response, setResponse] = useState("");

const selectTrain = async () => {

const configs = {
method : "GET",
mode : "cors",
headers : {"Content-Type" : "application/json"},
train: inputTrain
}
try {
  const response = await fetch(url, configs)
} catch (error) {
  console.log(error);
}

}


  return (
    <center>
    <div>
 
    <select id = "traindropdown" 
    onChange = {e => setInputTrain(e.target.value)}
    onClick = {() => selectTrain()}
    >
    <option value = "A" >A</option>
    <option value = "B" >B</option>
    <option value = "C" >C</option>
    <option value = "D" >D</option>
    <option value = "E" >E</option>
    <option value = "F" >F</option>
    <option value = "G" >G</option>
    <option value = "J" >J</option>
    <option value = "L" >L</option>
    <option value = "M" >M</option>
    <option value = "N" >N</option>
    <option value = "Q" >Q</option>
    <option value = "R" >R</option>
    <option value = "W" >W</option>
    <option value = "Z" >Z</option>
    <option value = "1" >1</option>
    <option value = "2" >2</option>
    <option value = "3" >3</option>
    <option value = "4" >4</option>
    <option value = "5" >5</option>
    <option value = "6" >6</option>
    <option value = "7" >7</option>

    </select>
    
    </div></center>
  );
}

export default Homepage;