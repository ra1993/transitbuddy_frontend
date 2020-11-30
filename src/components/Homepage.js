import React from 'react';

//routes/components
import TrainMenu from './TrainMenu';
import StationMenu from './StationMenu';
import IncomingTime from './IncomingTime';
import LandingPage from './LandingPage';
import Weather from './Weather';
import StationList from './PickStationTrains';

import Footer from './Footer.js';
import Register from './Register';
import Login from './Login';
import mtaFeed from './MTA_TwitterFeed';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux'
import './../App.css';
import Banner1 from '../Banner1.jpg';
function Homepage(props) {
  const pToken = useSelector(state => state.token)
  console.log('Token', pToken)
  return (
  <div className="userHomepage">
    <h1> New York Commuter Knowledge System</h1>

    <center><h2>Subway Times</h2></center>
    <TrainMenu/>
    
    <br></br>
    <TrainMenu/>

    <br></br>
    <StationList/>
 
    <div className="weather"> Weather Component
    <Weather/>
    </div>
    {/* <div className="notepad">Notes Component</div>*/}
   
    {/* </div>   */}
    </div>
  )}

export default Homepage; 
