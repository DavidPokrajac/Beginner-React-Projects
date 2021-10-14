import React from "react";
import classes from "./Display.module.css";

const Display = (props) => {
  return(
    <>
      <input 
        className={classes.Display} 
        type="text" 
        value={props.num} 
        onChange={e => setNum(e.target.value)} 
        readOnly
      />
    </>
  )
}

export default Display;