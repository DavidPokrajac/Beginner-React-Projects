import React from "react";
import classes from "./Inputs.module.css";

const email = props => {
  return (
    <div className={classes.Div}>
      <label className={classes.Label}>Email</label>
      <input type="email" name="email" onChange={props.change} />
      <p>Email must contain @ and have a valid domain</p>
    </div>
  );
};

export default email;
