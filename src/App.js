import React from 'react';

//routes/components
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import mtaFeed from './components/MTA_TwitterFeed';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


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
            <Route path = "/homepage" component = {Homepage}/>
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
