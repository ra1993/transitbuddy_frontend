import React, {useState, useEffect} from "react";
import '../App.css';
import StationMenu from './StationMenu';
import axios from 'axios';

const url = 'http://localhost:5000/train/'
const configs = {
  method: 'POST',
  mode: 'cors'
}
const fetchStations = async (train) => {

  let results = await fetch(url + train, configs)
      .then(response => {
        return response.json()
      })
      .then(data => {
        return data
      })
  return results
}
const fetchTrains = () => {
  return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'J', 'L', 'M',
    'N', 'Q', 'R', 'W', 'Z', '1', '2', '3', '4', '5', '6', '7']
}
function TrainMenu() {
  const [inputTrain, setInputTrain] = useState("A");
  const [stations, setStations] = useState([])
  const [trains, setTrains] = useState([])

  const renderTrains = () => {
    return trains.map((t, i) => {
      return ( <option value={t} key={'train-option-' + i}>{t}</option> )
    })
  }

  useEffect(() => {
    if(inputTrain !== '') {
      fetchStations(inputTrain)
          .then(res => {
            setStations(res.stations)
          })
          .catch(err => {
            console.log(err)
          })
    }
    }, [inputTrain])

  useEffect(() => {
    setTrains(fetchTrains())
  }, [])

  return (
    
      <div id = "searchCategories" className = "searchCategories">
      <select name = "searchCategories" id = "searchCategories"
            onChange = {e => setInputTrain(e.target.value)}>
          {renderTrains()}
      </select>
        
        <StationMenu stations={stations} train={inputTrain} />
        <button className = "addRoute">Add Route</button>
        <button className = "removeRoute">Remove Route</button>

      </div>
  );
}


export default TrainMenu;



// import React, {Component, useState} from "react";
// import '/home/richarda/Bootcamp/project_MTA/frontend_app/src/App.css';
// import StationMenu from './StationMenu';
// import axios from 'axios';

// function TrainMenu() {
// const [inputTrain, setInputTrain] = useState("");
// const [url, setUrl] = useState("http://localhost:5000/train")
// const [response, setResponse] = useState("");

// const selectTrain = async () => {

// const configs = {
// method : "POST",
// mode : "cors",

// }
// try {
//   const response = await fetch(url+"/"+ inputTrain ,configs)
// } catch (error) {
//   console.log(error);
// }

// }


//   return (
//     <center>
//     <div id = "searchCategories" className = "searchCategories">
 
//     <select name = "searchCategories" id = "searchCategories" 
//     onChange = {e => setInputTrain(e.target.value)}
//     onClick = {() => selectTrain()}
   
//     >
//     <option value = "A" >A</option>
//     <option value = "B" >B</option>
//     <option value = "C" >C</option>
//     <option value = "D" >D</option>
//     <option value = "E" >E</option>
//     <option value = "F" >F</option>
//     <option value = "G" >G</option>
//     <option value = "J" >J</option>
//     <option value = "L" >L</option>
//     <option value = "M" >M</option>
//     <option value = "N" >N</option>
//     <option value = "Q" >Q</option>
//     <option value = "R" >R</option>
//     <option value = "W" >W</option>
//     <option value = "Z" >Z</option>
//     <option value = "1" >1</option>
//     <option value = "2" >2</option>
//     <option value = "3" >3</option>
//     <option value = "4" >4</option>
//     <option value = "5" >5</option>
//     <option value = "6" >6</option>
//     <option value = "7" >7</option>

//     </select>
    
//     </div></center>
//   );
// }

// export default TrainMenu;