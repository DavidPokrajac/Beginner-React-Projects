import React from 'react';
import './AddCount.css';

const addCounter = props => {
  return <button onClick={props.add}
          className="Add">+</button>;
}

export default addCounter;