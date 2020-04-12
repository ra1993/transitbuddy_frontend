import React, {useState, useEffect} from "react";

const url = "http://localhost:5000/incoming/time"

function IncomingTime({train, station}) {
  const [time, setTime] = useState([]);


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
      setTime(['Calculating time...', 'This takes a minute...'])
      let configs = {
        method : "GET",
        mode : "cors",
        headers : {"Content-Type" : "application/json"},
      }
      fetch(url + '/' + train + '/' + station, configs)
        .then(results => results.json())
        .then(results => {
          if(Array.isArray(results))
           setTime(results)
          
        })
        .catch( err => {
          console.log(err)
        })
    }
  }, [train, station])

    
  const renderTimes = () => {
   
    if(!Array.isArray(time))
      return <div>Calculating times</div>
    return time.map((t, i) => {
      let title = 'south'
      if(i === 0) title = 'north'
      return (
        <div key={'time-' + i}>
          <h3>{title[0].toUpperCase() +""+ title.slice(1)} Bound</h3>
          <label id={title + "bound"} className="times">
            {t}
          </label>
        </div>
      )
    })
  }

  return (
  <div className = "trainTimes">
    {renderTimes()}
  </div>
  )
}

export default IncomingTime;