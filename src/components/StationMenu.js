import React, {useState, useEffect} from "react";


function StationMenu(props) {
  const [stations, setStations] = useState([])
  const [selectedStation, setSelectedStation] = useState(-1)
  const renderStations = () => {
    return stations.map((station, i) => {
 
      return ( <option value={i} key={'station-option-' + i}>{station}</option> )
    })
  }



  useEffect(() => {
    if(props.stations !== undefined) {
      setStations(props.stations)
    }
  }, [props.stations])

  return (
    <center>
      <div id = "stationSelect" className = "dropBtn">

        <select id = "stationdropdown">
          {renderStations()}
        </select>
      <IncomingTime train = {props.train} station = {selectedStation}/>

      </div></center>
  );
}

export default StationMenu;


// import React, {Component, useState, useEffect} from "react";


// function StationMenu() {
// const [inputStation, setInputStation] = useState("");
// const [url, setUrl] = useState("http://localhost:5000/stations")
// const [response, setResponse] = useState("");
// //await was returning errors
// useEffect(() => {
// fetch(url).then(response => 
//   response.json().then(data => {
//   console.log(data);
//   }))

// },[]);
// // const getStations = async () => {

// // const configs = {
// // method : ["GET"],
// // mode : "cors",
// // headers : {"Content-Type" : "application/json"},
// // station: inputStation
// // }
// // try {
// //   const response = await fetch(url, configs)
// // } catch (error) {
// //   console.log(error);
// // }

// // }
//   return (
//     <center>
//     <div id = "stationSelect" className = "dropBtn">
 
//     {/* <select id = "stationdropdown" 
//     stations should populate here

//     </select> */}
    
//     </div></center>
//   );
// }

// export default StationMenu;