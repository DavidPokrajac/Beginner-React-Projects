import React from "react";
import classes from "./Operators.module.css";

const Operators = (props) => {
  return(
    <div className={classes.Container}>
      <button onClick={props.finished === false ? props.click : null}>+</button>
      <button onClick={props.finished === false ? props.click : null}>-</button>
      <button onClick={props.finished === false ? props.click : null}>*</button>
      <button onClick={props.finished === false ? props.click : null}>/</button>
    </div>
  )
}

export default Operators;