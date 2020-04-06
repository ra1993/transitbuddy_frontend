import React, {useState, useEffect} from "react";

const url = "http://localhost:5000/incoming/time"

function IncomingTime({train, station}) {
  const [time, setTime] = useState("");

  console.log('Train', train)
  console.log('Station', station)

  useEffect(() => {
    if(train === undefined || train === '')
      setTime('Waiting for train selection')
  }, [train])
  useEffect(() => {
    if(station === undefined || station === '')
      setTime('Waiting for station selection')
  }, [station])
  useEffect(() => {
    if(train !== undefined && train !== '' &&
      station !== undefined && station !== '') {
      setTime('Calculating time...')
      let configs = {
        method : "GET",
        mode : "cors",
        headers : {"Content-Type" : "application/json"},
      }
      fetch(url + '/' + train + '/' + station, configs)
        .then(results => results.json())
        .then(results => {
          setTime(results.incoming_time)
        })
        .catch( err => {
          console.log(err)
        })
    }
  }, [train, station])
    

  return (
  <label id = "time">
    {time}
  </label>
  )
}

export default IncomingTime;