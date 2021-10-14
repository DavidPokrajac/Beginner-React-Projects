import React from "react";
import "./style.css"

const SortCont = (props) => {
  return(
    <div id="cont2" className={props.openSortCt ? "sortShow" : "sortHide"}>
      <button onClick={props.reverse}>Reverse Order</button>
      <button onClick={props.sortHigherHP}>Higher Horsepower</button>
      <button onClick={props.sortLowerHP}>Lower Horsepower</button>
      <button onClick={props.sortOldestAge}>Oldest</button>
      <button onClick={props.sortNewestAge}>Newest</button>
      <button onClick={props.sortHighestPrice}>Highest Price</button>
      <button onClick={props.sortLowestPrice}>Lowest Price</button>
    </div>
  );
}

export default SortCont;