import React, { Component } from "react";
import classes from "./AddTodoItem.module.css";

class AddTodoItem extends Component {
  state = {
    todos: "",
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todos);
    this.setState({
      todos: ""
    });
  };

  onChangeHandler = e => {
    this.setState({
      todos: e.target.value
    });
  };

  render() {
    return (
      <form className={classes.Form} onSubmit={this.handleSubmit}>
        <input
          className={classes.Input}
          type="text"
          placeholder="Enter a new todo"
          onChange={this.onChangeHandler}
          value={this.state.todos}
          required
        />
        <button className={classes.Button}>Add</button>
      </form>
    );
  }
}

export default AddTodoItem;
