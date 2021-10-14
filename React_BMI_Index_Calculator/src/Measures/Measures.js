import React from "react";
import classes from "./Measures.module.css"

const measures = (props) => {
  return (
    <div className={classes.Measures}>
      <div>
        <label>Enter your weight</label>
        <input className={classes.Input} onChange={props.changeW} type="number" value={props.weight} />
      </div>
      <div>
        <label>Enter your height</label>
        <input className={classes.Input} onChange={props.changeH} type="number" value={props.height} /> 
      </div> 
    </div> 
  );
}

export default measures;