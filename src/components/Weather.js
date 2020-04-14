import React, {useState, useEffect} from "react";


const locUrl = (lat, long, key) => "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=" + key + '&units=imperial'
const apiUrl = "http://localhost:5000/weatherkey"

function Weather() {
const [apiKey, setApiKey] = useState("")
const [inputLatitude, setLatitude] = useState(0);
const [inputLongitude, setLongitude] = useState(0);
const [city, setCity] = useState("New York");
const [country, setCountry] = useState("United States");
const [temperature, setTemperature] = useState({
  current: 1000,
  high: 5000,
  low: -3000
});
const [humidity, setHumidity] = useState(0);
const [wind, setWind] = useState("");
const [description, setDescription] = useState("");
const [outside, setOutside] = useState('')
const [response, setResponse] = useState("")
// const [sunrise, setSunrise] = useState(new Date())
// const [sunset, setSunset] = useState(new Date())
const [error, setError] = useState("");
const [winds, setWinds] = useState(30000)

const configs = {
    method: "GET",
    mode: "cors",
    headers : {"Content-Type" : "application/json"},
}

// //fetche weather data
// const get_Weather = async (e) =>{
// // const api_call = await(url, configs)
// // const response = await api_call.json()
// // temperature: response.main.temp,
// // humidity: response.main,humidity,
// // description: response.weather[0].description,
// // error: ""

// // console.log(response)
// }

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( pos => {
        console.log('Position', pos)
        setLatitude(pos.coords.latitude)
        setLongitude(pos.coords.longitude)
      })
    }
    // Get the API key
    fetch(apiUrl, configs)
      .then(res => res.json())
      .then(res => {
        setApiKey(res.weather_key)
        
      })
      console.log(apiUrl)
      console.log(apiKey)
  }, [])

  useEffect(() => {

    if(apiKey !== '' && inputLatitude !== 0 && inputLongitude !== 0) {
      const loc = locUrl(inputLatitude, inputLongitude, apiKey)
     
      fetch(loc)
        .then(res => res.json())
        .then(res => {
          setCity(res.name)
          setOutside(res.weather[0].main)
   
          setTemperature({
            current: res.main.temp,  
            high: res.main.temp_max,
            low: res.main.temp_low
          })
          setHumidity(res.main.humidity)
          setWinds(res.wind.speed)
        })
    }
  }, [apiKey, inputLatitude, inputLongitude])

  return (
    
    <div>
    {/* <form className = "weather">
    <span>
      <input id = "city" 
      className = "weatherForm" 
      onChange = {e => setCity(e.target.value)}
      placeholder = "City"
      ></input>

      <input id = "country" 
      className = "weatherForm"
      onChange = {e => setCountry(e.target.value)}
      placeholder = "Country"
      ></input>

    <button className = "getWeather"
    onClick = {() => get_Weather()}
    >Submit</button>
    </span>
    </form> */}

    
    <div className = "weatherData">
    <table>
    <tr>
      <th><h4>Temperature:</h4></th>
      <th><h4>Humidity:</h4></th>
      <th><h4>Wind Speed:</h4></th>
    </tr>

    <td><h4>{temperature.current} °F</h4></td>
    <td><h4>{humidity}</h4></td>
    <td><h4>{winds}</h4></td>
    </table>
 
    </div>
    </div>
  );

}
export default Weather;