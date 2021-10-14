import React from "react";

import "./Commands.css"

const Commands = props => {
  return(
    <div className="CmdsContainer">
      {props.startClicked ? <button onClick={props.stop}>Stop</button> : null}
      <button onClick={props.start}>Start</button>
      {props.stopClicked ? <button onClick={props.reset}>Reset</button> : null}
    </div>
  )
}

export default Commands;