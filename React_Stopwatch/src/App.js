import React, { Component } from "react";
import "./style.css";
import Timer from "./Timer/Timer";
import Commands from "./Commands/Commands";

class App extends Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    tens: 0,
    startClicked: false,
    stopClicked: false
  };

  startTimer = () => {
    this.m = setInterval(() => {
      this.setState({
        hours: this.state.hours,
        minutes: this.state.minutes,
        seconds: this.state.seconds,
        tens: this.state.tens + 2,
        startClicked: true
      });

      this.state.tens > 9
        ? this.setState({
            hours: this.state.hours,
            minutes: this.state.minutes,
            seconds: this.state.seconds + 1,
            tens: 0,
            startClicked: true
          })
        : null;

      this.state.seconds > 59
        ? this.setState({
            hours: this.state.hours,
            minutes: this.state.minutes + 1,
            seconds: 0,
            tens: 0,
            startClicked: true
          })
        : null;

      this.state.minutes > 59
        ? this.setState({
            hours: this.state.hours + 1,
            minutes: 0,
            seconds: 0,
            tens: 0,
            startClicked: true
          })
        : null;
    }, 200);
  };

  stopTimer = () => {
    clearInterval(this.m);
    this.setState({
      stopClicked: true
    })
  };

  resetTimer = () => {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0,
      tens: 0
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React StopWatch</h1>
        <Timer
          hrs={this.state.hours}
          mins={this.state.minutes}
          secs={this.state.seconds}
          tens={this.state.tens}
        />
        <Commands
          start={this.startTimer}
          stop={this.stopTimer}
          reset={this.resetTimer}
          startClicked={this.state.startClicked}
          stopClicked={this.state.stopClicked}
        />
      </div>
    );
  }
}

export default App;
