import classes from "../NavBar.module.css";
import React from 'react';
const Login=(props)=>{
  const LoginHandler=()=>{
    props.modal("true");
  }
    return(<li className={classes.profile} onClick={LoginHandler}>Login</li>)
};
export default Login;
