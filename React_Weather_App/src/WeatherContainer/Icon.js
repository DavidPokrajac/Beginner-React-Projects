import React from "react"
import classes from "./WeatherContainer.module.css"

const Icon = (props) => {
  let a
  switch(props.icon){
    case "01n":
      a = <span className={classes.ClearNight}></span>
      break
    case "01d":
      a = <span className={classes.ClearDay}></span>
      break
    case "02d":
      a = <span className={classes.FewDay}></span>
      break
    case "02n":
      a = <span className={classes.FewNight}></span>
      break
    case "03d":
      a = <span className={classes.Cloud}></span>
      break
    case "03n":
      a = <span className={classes.Cloud}></span>
      break
    case "04n":
      a = <span className={classes.Shower}></span>
      break
    case "04d":
      a = <span className={classes.Shower}></span>
      break
    case "09n":
      a = <span className={classes.Clouds}></span>
      break
    case "09d":
      a = <span className={classes.Clouds}></span>
      break
    case "10n":
      a = <span className={classes.RainNight}></span>
      break
    case "10d":
      a = <span className={classes.RainDay}></span>
      break
    case "11d":
      a = <span className={classes.Thunderstorm}></span>
      break
    case "11n":
      a = <span className={classes.Thunderstorm}></span>
      break
    case "13d":
      a = <span className={classes.Snow}></span>
      break
    case "13n":
      a = <span className={classes.Snow}></span>
      break
    case "50d":
      a = <span className={classes.Mist}></span>
      break
    case "50n":
      a = <span className={classes.Mist}></span>
      break
  }
  return(
    <div>
      {a}
    </div>
  )
}

export default Icon