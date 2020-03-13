import React, {Component} from "react";






function Register(props) {




    return (
        <form action="/register" method="POST">


        <input name="f_name" type="text" placeholder="First Name"/>
        <input name="l_name" type="text" placeholder="Last Name"/>
        <input name="username" type="text" placeholder="Username"/>
        <input name="password" type="password" placeholder="password"/>
        <input name="email" type="text" placeholder="email address"/>
    
        <input type="Submit"/>
      </form>  
   
  
    );
  
  }

  export default Register;