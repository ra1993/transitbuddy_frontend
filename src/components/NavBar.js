import React from 'react'; 
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux'

const NavBar= () => {
  const token = useSelector(state => state.token)

    React.useEffect(() => {
      console.log('Token', token)
    }, [token])
    return (
    
      <header className="header">
      <h1 className = "appName">N.Y.C.K.S</h1>
      <ul> 
     
        <NavLink to="/home">Home</NavLink>
        <NavLink  to="/register">Register</NavLink>
        {token === '' ?
          <NavLink  to="/login">Login</NavLink>
        :
          <NavLink  to="/logout">Logout</NavLink>
        }
        <NavLink  to= "/feed">Feed</NavLink>
        <NavLink to="/mtaFeed">MTATwitterFeed</NavLink>
      </ul> 
   </header>
 
    );
}
 
export default NavBar;