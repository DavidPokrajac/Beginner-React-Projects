import React from "react";
import "./style.css";

const Navigation = (props) => {
  return(
    <nav>
      <ul>
        <li onClick={props.hi} className={props.openFilterCt ? "mark" : "unmark"}>Filter</li>
        <li onClick={props.hey} className={props.openSortCt ? "mark" : "unmark"}>Sort</li>
      </ul>
    </nav>
  );
}

export default Navigation;