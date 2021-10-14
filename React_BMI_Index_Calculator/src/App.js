import React, { Component } from "react";
import "./style.css";
import Measures from "./Measures/Measures";
import Outcome from "./Outcome/Outcome";

class App extends Component {
  state = {
    weight: "",
    height: ""
  };

  changeWeightHandler = (event) => {
    this.setState({
      weight: event.target.value,
      height: this.state.height
    })
  }

  changeHeightHandler = (event) => {
    this.setState({
      weight: this.state.weight,
      height: event.target.value
    })
  } 

  resetFields = () => {
    this.setState({
      weight: "",
      height: ""
    })
  }

  render() {
    let p = (Number(this.state.weight) / (Number(this.state.height) * Number(this.state.height)) * 10000).toFixed(2);
    if(isNaN(p)){
      p = 0;
    }
    let reset = {
      border: "none",
      borderRadius: "0.3em",
      padding: "0.3em 0.6em",
      fontSize: "1.1em",
      cursor: "pointer"
    }
    return (
      <div className="App">
        <h1>BMI Calculator</h1>
        <em>Calculate your BMI (Body Mass Index)</em><br /><br />
        <Measures changeW={this.changeWeightHandler.bind(this)} weight={this.state.weight} changeH={this.changeHeightHandler.bind(this)}height={this.state.height} />
        <p>Your BMI index is: <strong>{p}</strong></p>
        <Outcome info={p} /> 
        <p><button style={reset} onClick={this.resetFields}>Reset</button></p>
      </div>
    );
  }
}

export default App;
