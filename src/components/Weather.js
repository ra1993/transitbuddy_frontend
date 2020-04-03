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
const [humidity, setHumidity] = useState("");
const [wind, setWind] = useState("");
const [description, setDescription] = useState("");
const [outside, setOutside] = useState('Alien')
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

//fetche weather data
const get_Weather = async (e) =>{
// const api_call = await(url, configs)
// const response = await api_call.json()
// temperature: response.main.temp,
// humidity: response.main,humidity,
// description: response.weather[0].description,
// error: ""

// console.log(response)
}

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
        setApiKey(res.weatherkey)
      })
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

          setHumidity(res.humidity)
          setWinds(res.wind.speed)
        })
    }
  }, [apiKey, inputLatitude, inputLongitude])

  useEffect(() => {
    console.log('City', city)
    console.log('Outside', outside)
    console.log('Temps', temperature)
    console.log('Humidity', humidity)

    console.log('Winds', winds)
  }, [winds])
  return (
    
    <div>
    <form className = "weather">
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
    </form>

    
    <div>
    <span>
    <h4>Temperature: {temperature.current} °F</h4>
    <h4>Humidity: {humidity}</h4>
    <h4>Wind Speed: {winds}</h4>
   
    </span>
    </div>
    </div>
  );

}
export default Weather;