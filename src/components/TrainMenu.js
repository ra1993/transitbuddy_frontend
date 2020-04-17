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
    
    <div className = "trainComp">
      
      <select className = "trainMenu"
            onChange = {e => setInputTrain(e.target.value)}>
          {renderTrains()}
      </select>
    
        <StationMenu stations={stations} train={inputTrain} />
        
    
        {/* <button className = "addRoute">Add Route</button>
        <button className = "removeRoute">Remove Route</button> */}
    </div>
  );
}


export default TrainMenu;


