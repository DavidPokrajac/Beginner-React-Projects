import React from 'react';
import classes from './Joke.module.css';

const joke = (props) => {
  return(
    <div className={classes.Container}>
      <p>{props.value}</p>
      <button onClick={props.clicked}>Generate</button>
    </div>
  )
}

export default joke;