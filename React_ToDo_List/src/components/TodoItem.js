import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem = props => {
  let a = {
    color: props.todo.completed ? "darkgreen" : "",
    fontWeight: props.todo.completed ? "bolder" : "",
    textIndent: "1em"
  };
  return (
    <div className={classes.Div}>
      <p style={a}>{props.todo.text}</p>
      <div className={classes.Buttons}>
        <span style={{backgroundColor: "#f65306", border: "2px solid #874005"}} onClick={() => props.removeTodo(props.todo.id)}>Delete</span>
        <span style={props.todo.completed ? {backgroundColor: "firebrick", border: "2px solid crimson"} : {backgroundColor: "forestgreen", border: "2px solid limegreen"}} onClick={() => props.markComplete(props.todo.id)}>
          {props.todo.completed ? "Unmark as complete" : "Mark as complete"}
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
