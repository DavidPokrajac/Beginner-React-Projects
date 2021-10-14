import React, { Component } from "react";
import "./style.css";
import Username from "./Inputs/Username";
import Password from "./Inputs/Password";
import Telephone from "./Inputs/Telephone";
import Email from "./Inputs/Email";
import Website from "./Inputs/Website";

class App extends Component {
  state = {
    username: /^[a-z\d]+$/i,
    password: /^[a-z\d]{5,10}$/i,
    telephone: /^[\d]{10,11}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3)?$/i,
    website: /^([a-z\d\.-]+)\.([a-z]{2,3})(\.[a-z]{2,3)?$/i
  };

  validate = (field, regex) => {
    if (regex.test(field.value)) {
      field.className = "valid";
    } else {
      field.className = "invalid";
    }
    if (field.value === "") {
      field.className = "";
    }
  };

  changeUsername = e => {
    this.validate(e.target, this.state[e.target.attributes.name.value]);
  };

  render() {
    return (
      <div className="App">
        <h1>Form Validation</h1>
        <Username change={this.changeUsername} />
        <Password change={this.changeUsername} />
        <Telephone change={this.changeUsername} />
        <Email change={this.changeUsername} />
        <Website change={this.changeUsername} />
      </div>
    );
  }
}

export default App;
