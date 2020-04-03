import React, {useState, useEffect} from "react";
import IncomingTime from './IncomingTime';


function StationMenu(props) {
  const [stations, setStations] = useState([])
  const [selectedStation, setSelectedStation] = useState()
  const renderStations = () => {
    return stations.map((station, i) => {
      return ( <option value={i} key={'station-option-' + i}>{station}</option> )
    })
  }

  const onChange = (e) => {
    setSelectedStation(props.stations[Number(e.currentTarget.value)])
  }

  useEffect(() => {
    if(props.stations !== undefined) {
      setStations(props.stations)
      setSelectedStation(props.stations[0])
    }
  }, [props.stations])

  return (
    <>
      <select id = "stationdropdown" className={'dropBtn'}
        onChange = {onChange}>
          {renderStations()}
      </select>
      <IncomingTime train = {props.train} station = {selectedStation} />
    </>
  );
}

export default StationMenu;


