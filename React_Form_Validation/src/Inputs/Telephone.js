import React from 'react';
import classes from "./Inputs.module.css";

const telephone = (props) => {
  return (
    <div className={classes.Div}>
      <label className={classes.Label}>Telephone</label>
      <input type="tel" name="telephone" onChange={props.change} />
      <p>Telephone must be 10 - 11 numbers long </p>
    </div>
  )
}

export default telephone;