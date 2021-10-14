import React from 'react';
import classes from "./Inputs.module.css";

const username = (props) => {
  return (
    <div className={classes.Div}>
      <label className={classes.Label}>Username</label>
      <input type="text" name="username" onChange={props.change} />
      <p>Username must start with a letter / digit and contain 5 - 12 chars</p>
    </div>
  )
}

export default username;