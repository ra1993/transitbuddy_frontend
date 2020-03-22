import React from 'react';

//routes/components
import TrainMenu from './TrainMenu';
import StationMenu from './StationMenu';
import IncomingTime from './IncomingTime';

import Footer from './Footer.js';
import Register from './Register';
import Login from './Login';
import mtaFeed from './MTA_TwitterFeed';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './../App.css';
function Homepage() {

  return (
  <div className="userHomepage">
    
    <h1> Transit Buddy Homepage</h1>
    
     <TrainMenu/>
     <StationMenu/>
     <IncomingTime/>
    
    <Footer/>
    </div> 
    
  )}

export default Homepage; 
