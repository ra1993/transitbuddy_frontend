import React, { Fragment } from 'react';

//routes/components
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Register from './components/Register';
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
            {/* <Route path = "/" component = {Homepage}/> */}
            <Route path="/register" component={Register}/>

           
           </Switch>
        </div> 
      </BrowserRouter>
   

     
   <Footer/>
  </div>


 

  );

}

export default App;
