import React, { Component } from "react";
import "./style.css";
import AddCounter from "./AddCounter/AddCount";
import RemoveCounter from "./RemoveCounter/RemoveCount";
import "./Container.css";

class App extends Component {
  state = {
    number: 0
  };

  addingHandler = () => {
    this.setState((prevNum) => (
      {number: prevNum.number + 1}
    ));
  
  };

  removingHandler = () => {
    this.setState((prevNum) => (
      {number: prevNum.number - 1}
    ));
    
  };

  render() {
    let num = <p>{this.state.number}</p>;
  
    if (this.state.number < 0) {
      num = <p style={negative}>{this.state.number}</p>;
      document.body.style.backgroundColor = "rgba(211, 87, 87, 0.8)";
    }
    if (this.state.number > 0) {
      num = <p style={positive}>{this.state.number}</p>;
      document.body.style.backgroundColor = "rgba(78, 238, 59, 0.8)";
    }
    if(this.state.number === 0){
      document.body.style.backgroundColor = "";
    }
    return (
      <div className="App">
        <h1>React Counter</h1>
        <div className="Container">
          {num}
          <div className="Controls">
            <AddCounter add={this.addingHandler} />
            <RemoveCounter remove={this.removingHandler} />
          </div>
        </div>
      </div>
    );
  }
}

const negative = {
  color: "firebrick"
};

const positive = {
  color: "forestgreen"
}

export default App;
