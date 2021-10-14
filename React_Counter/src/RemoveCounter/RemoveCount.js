import React from "react";
import "./RemoveCount.css";

const removeCounter = props => {
  return <button onClick={props.remove}
          className="Remove">-</button>;
};

export default removeCounter;
