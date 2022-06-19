import React from "react";
import {auth,provider} from "./firebase.js";
import {signInWithPopup} from "firebase/auth";

import {useDispatch} from "react-redux";
import {login,logout} from "./User.js";
import "./Styles/login.css";

const Login=()=>{
  const dispatch=useDispatch();



  const signIn=()=>
  {
    signInWithPopup(auth,provider).catch(err=>alert(err.message));

  }
  

  
  
  return(
    
    <div className="login">
      <div className="login-logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz3nYOXX2xwws6dpaBqyx4l5v2I6wZL86BTg&usqp=CAU"/>
      </div>
      
      <button onClick={signIn}>Sign In</button>


    
    </div>
    
    
  )
};
export default Login;