import React from 'react';

import "./Timer.css";

const timer = props => {
  let p = <p>0{props.hrs} : 0{props.mins} : 0{props.secs}.{props.tens}</p>
  if(props.secs > 9){
    p = <p>0{props.hrs} : 0{props.mins} : {props.secs}.{props.tens}</p>
  } else if(props.mins > 9){
    p = <p>0{props.hrs} : {props.mins} : 0{props.secs}.{props.tens}</p>
  } else if(props.hrs > 9){
    p = <p>{props.hrs} : 0{props.mins} : 0{props.secs}.{props.tens}</p>
  }
  return(
    <React.Fragment>
      <div className="Container">
        {p}
      </div>
    </React.Fragment>
  );
}

export default timer;