import React from 'react';
import classes from "./Inputs.module.css";

const password = (props) => {
  return (
    <div className={classes.Div}>
      <label className={classes.Label}>Password</label>
      <input type="password" name="password" onChange={props.change} />
      <p>Password must contain 5 - 10 characters</p>
    </div>
  )
}

export default password;