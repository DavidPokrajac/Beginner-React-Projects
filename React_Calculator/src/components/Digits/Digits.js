import React from "react";
import classes from "./Digits.module.css";

const Digits = (props) => {
  /* const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((number, index) => {
    return (
      <button 
        key={index}
        className={classes.children} 
        onClick={props.finished === false ? props.click : null}>
        {number}
      </button>
      )
  }) */
  
  return (
    <div className={classes.Digits}>
      <button 
        className={classes.children} 
        onClick={props.finished === false ? props.click : null}>
        9
      </button>
      <button 
        className={classes.children} 
        onClick={props.finished === false ? props.click : null}>
        8
      </button>
      <button 
        className={classes.children} 
        onClick={props.finished === false ? props.click : null}>
        7
      </button>
      <button 
        className={classes.children} 
        onClick={props.finished === false ? props.click : null}>
        6
      </button>
      <button 
        className={classes.children} 
        onClick={props.finished === false ? props.click : null}>
        5
      </button>
      <button 
        className={classes.children} 
        onClick={props.finished === false ? props.click : null}>
        4
      </button>
      <button 
        className={classes.children} 
        onClick={props.finished === false ? props.click : null}>
        3
      </button>
      <button 
        className={classes.children} 
        onClick={props.finished === false ? props.click : null}>
        2
      </button>
      <button 
        className={classes.children} 
        onClick={props.finished === false ? props.click : null}>
        1
      </button>
      <button 
        className={classes.children} 
        onClick={props.noZero || props.finished !== false ? null : props.click}>
        0
      </button>
    </div>
  )
}

export default Digits;