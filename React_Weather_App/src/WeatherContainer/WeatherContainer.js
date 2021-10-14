import React from "react"
import classes from "./WeatherContainer.module.css"
import Icon from "./Icon"

const weatherContainer = props => {
  
  return(
    <div className={classes.Container}>
      <p style={{textTransform: "capitalize"}}>{props.city}</p>
      <div className={props.city === "Please enter valid name" ? classes.HiddenInfo : classes.Info}>
        <Icon icon={props.icon} />
        <p>{props.forecast}</p>
        <div className={classes.Additional}>
          <span>
            <span style={{fontWeight: "bold", textDecoration: "underline"}} className={classes.Block}>Temperature</span>
            <span style={{textAlign: "center"}} className={classes.Block}>{props.temp} &deg;C</span>
          </span>
          <span>
            <span style={{fontWeight: "bold", textDecoration: "underline"}} className={classes.Block}>Humidity</span>
            <span style={{textAlign: "center"}} className={classes.Block}>{props.humidity} %</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default weatherContainer