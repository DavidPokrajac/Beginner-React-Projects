import React from 'react';
import classes from "./Inputs.module.css";

const website = (props) => {
  return (
    <div className={classes.Div}>
      <label className={classes.Label}>Website (without www)</label>
      <input type="text" name="website" onChange={props.change} />
      <p>Website must end with a valid domain</p>
    </div>
  )
}

export default website;