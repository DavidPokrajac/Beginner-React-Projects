import React, { Component } from "react";
import "./style.css";
import axios from "axios";
import Joke from "./Joke/Joke";

class App extends Component {
  state = {
    value: ""
  };

  setJoke = () => {
    axios
      .get("/random")
      .then(response => {
        this.setState({
          value: response.data.value
        });
      })
      .catch(error => console.log(error));
  };

  componentDidMount = () => {
    axios
      .get("/random")
      .then(response => {
        this.setState({
          value: response.data.value
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <h1>Random Chuck Norris joke generator</h1>
        <Joke
          value={this.state.value}
          clicked={this.setJoke.bind(this, this.state.value)}
          yo={this.state.clc}
        />
      </div>
    );
  }
}

export default App;
