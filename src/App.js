import React from 'react';

//routes/components
import LandingPage from './components/LandingPage'
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import Register from './components/Register';
import Login from './components/Login';
import Feed from './components/Feed'
import mtaFeed from './components/MTA_TwitterFeed';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Logout from './components/Logout'

//css
import './App.css';
function App() {
  return (
 
  <div className="App">

     <h1 className = "appName">Transit Buddy</h1>
      <BrowserRouter>
        <div>
        
          <NavBar/>
         
            <Switch>
            <Route path='/home' component={Homepage}/>
            <Route path="/register" component={Register}/>
            <Route path = "/login"  component = {Login}/>
            <Route path="/logout" component={Logout}/>
            <Route path = "/feed" component = {Feed}/>
            <Route path = "/mtaFeed" component = {mtaFeed}/>
            <Route path="*" component={Login}/>       
           </Switch>
       
        </div> 
      </BrowserRouter>
   
     <Footer/>
  </div>

  );

}

export default App;
