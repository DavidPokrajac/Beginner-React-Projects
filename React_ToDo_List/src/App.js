import React, { Component } from "react";
import "./style.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodoItem from "./components/AddTodoItem";
import RemoveAllTodos from "./components/RemoveAllTodos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        text: "Wash clothes",
        completed: false
      },
      {
        id: 2,
        text: "Do my homework",
        completed: false
      },
      {
        id: 3,
        text: "Learn programming basics",
        completed: false
      }
    ]
  };

  addTodo = title => {
      const id = Math.random() * 1000;
      const newTodo = {
        id: id,
        text: title,
        completed: false
      };
      this.setState({
        todos: [newTodo, ...this.state.todos]
      });
  };

  removeTodoHandler = id => {
    let t = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: t
    });
  };

  removeAllTodos = () => {
    this.setState({
      todos: []
    });
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  };

  render() {
    return (
      <div>
        <Header title="Todo List" />
        <AddTodoItem addTodo={this.addTodo} />
        <Todos todos={this.state.todos} removeTodo={this.removeTodoHandler} markComplete={this.markComplete} />
        <RemoveAllTodos removeAllTodos={this.removeAllTodos} />
      </div>
    );
  }
}

export default App;
