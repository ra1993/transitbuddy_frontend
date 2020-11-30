import React, {useState, useEffect} from "react";
import '../App.css';


const url = "http://localhost:5000/stationlist"


function StationList(){
const [station, setStation] = useState("");

const configs = {
method: 'GET',
mode: 'cors'
}



return(
<h2>Listed Trains for Station:</h2>






)
}
export default StationList;