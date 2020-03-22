import React, {Component, useState} from "react";


// class Weather extends React.Component{


// //state
// state = {

// coords: {
// latitude: 45,
// longitude: 60

// }
// }

// componentDidMount(){

//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition((position) =>{
        
//             let newCoords = {
//                 latitude: position.coords.latitude,
//                 longitude: position.coords.longitude
//             }
//             this.setState({coords:newCoords}); //updates default coordinates
//         }

//     } else{
//         console.log("Not Supported")
//     }
// }
// }


function Weather() {
const [inputLatitude, setLatitude] = useState(40.71);
const [inputLongitude, setLongitude] = useState(-74.00);
const [coords, setCoords] = ("");
 
let setCoordinates = async => {

const configs ={
method : "POST",
mode : "cors",
headers : {"Content-Type" : "application/json"},
latitude : inputLatitude,
longitude: inputLongitude

}



  return (
    
    <div>




    </div>
  );
}

export default Weather;