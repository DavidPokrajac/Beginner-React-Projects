import React from "react";
import classes from "./OtherOps.module.css";

const OtherOps = (props) => {
  return(
    <div className={classes.Div}>
      <button onClick={props.clear}>C</button>
      <button onClick={props.clicked}>=</button>
      <button onClick={props.finished === false ? props.click : null}>.</button>
    </div>
  )
}

export default OtherOps;