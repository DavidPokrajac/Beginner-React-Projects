import React from "react";
import "./style.css"

const FilterCont = (props) => {
  return(
    <div id="cont1" className={props.openFilterCt ? "show" : "hide"}>
      <div>
        <label>Manufacturer: </label>
        <input type="text" value={props.term1} placeholder="Input car manufacturer" onChange={props.setManName} />
      </div>
      <div>
        <label>Model: </label>
        <input type="text" value={props.term2} placeholder="Input car model" onChange={props.setModName} />
      </div>
      <div>
        <label>Price: </label>
        <select value={props.price} onChange={props.setPriceHandler}>
          <option value="cheapest">Cheapest</option>
          <option value="ordinary">Ordinary</option>
          <option value="expensive">Most expensive</option>
          <option value="luxury">Luxury</option>
        </select>
      </div>
      <div>
        <label>Year: </label>
        <input type="number" value={props.year} size="4" onChange={props.setYearHandler} />  
      </div>
    </div>
  );
}

export default FilterCont;