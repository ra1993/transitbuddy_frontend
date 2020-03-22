import React from 'react';

//routes/components
import LandingPage from './components/LandingPage'
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import Register from './components/Register';
import Login from './components/Login';
import mtaFeed from './components/MTA_TwitterFeed';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';


//css
import './App.css';
function App() {

  return (
  <div className="App">
     <h1 className = "appName">Transit Buddy</h1>

        
      <BrowserRouter>
        <div>
        
          <NavBar/>
          {/* <LandingPage/> */}
            <Switch>
            <Route path = "/home" component = {Homepage}/>
            <Route path="/register" component={Register}/>
            <Route path = "/login" component = {Login}/>
            <Route path = "/mtaFeed" component = {mtaFeed}/>

        
           </Switch>
        </div> 
      </BrowserRouter>
   
     <Footer/>
  </div>

  );

}

export default App;
