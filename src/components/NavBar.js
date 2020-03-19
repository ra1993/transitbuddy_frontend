import React from 'react'; 
import { NavLink } from 'react-router-dom';
 
const NavBar= () => {
    return (
      <div className = "menu">
      <span>
        <ul> <NavLink className = "homemenu" to="/homepage">Home</NavLink></ul>
        <ul> <NavLink className = "homemenu" to="/register">Register</NavLink></ul> 
        <ul> <NavLink className = "homemenu" to="/login">Login</NavLink></ul> 
        <ul> <NavLink className = "homemenu" to="/mtaFeed">MTATwitterFeed</NavLink></ul> 
      </span>
  
    </div>
    );
}
 
export default NavBar;