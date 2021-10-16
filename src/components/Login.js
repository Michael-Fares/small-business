import React from "react";
import { Button } from "@material-ui/core";
import { TextField } from '@material-ui/core';

const Login = (props) => {
  console.log(props.user)
  return (
      <form className="login-form">
        <TextField required="true" placeholder="Username" label="Username"/>
        <TextField required="true" placeholder="Password" type="password" label="Password"/ >
          <div className="margin-top-sm button-wide">
        <Button fullWidth = {true} 
          variant="contained"
          className="login-button"
          onClick={props.loginUser}
          >
          Login
        </Button>
        </div>
      </form>
  )
}

export default Login;