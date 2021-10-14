import React from "react";
import classes from "./Outcome.module.css"

const outcome = (props) => {
  let alert;
  let alertSuggestion;
  if(props.info < 18.49){
    alert = <p className={classes.Danger}>Underweight</p>;
    alertSuggestion = <p className={classes.DangerText}>Consider eating more food.</p>;
  }
  if(props.info >= 18.50 && props.info < 24.99){
    alert = <p className={classes.Success}>Healthy</p>;
    alertSuggestion = <p className={classes.SuccessText}>You're healthy! Keep it that way!</p>;
  }
  if(props.info >= 25 && props.info < 29.99){
    alert = <p className={classes.Danger}>Overweight</p>;
    alertSuggestion = <p className={classes.DangerText}>Consider exercising more.</p>;
  }
  if(props.info >= 30){
    alert = <p className={classes.Danger}>Obese</p>;
    alertSuggestion = <p className={classes.DangerText}>Consider spending more time exerising, and going on a diet.</p>;
  }
  return (
    <div className={classes.Div}>
      {alert}
      {alertSuggestion}
    </div> 
  );
}

export default outcome;