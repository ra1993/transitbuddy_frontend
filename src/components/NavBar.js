import React from 'react'; 
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux'

const NavBar= () => {
  const token = useSelector(state => state.token)

    React.useEffect(() => {
      console.log('Token', token)
    }, [token])
    return (
    
      <div className = "menu">
   
        <ul> 
        <NavLink className = "homemenu" to="/home">Home</NavLink>
        <NavLink className = "homemenu" to="/register">Register</NavLink>
        
        {token === '' ?
          <NavLink className = "homemenu" to="/login">Login</NavLink>
        :
          <NavLink className="homemenu" to="/logout">Logout</NavLink>
        }
        <NavLink className = "homemenu" to= "/feed">Feed</NavLink>
        <NavLink className = "homemenu" to="/mtaFeed">MTATwitterFeed</NavLink>
        </ul> 
    
  
    </div>
 
    );
}
 
export default NavBar;