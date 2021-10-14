import React, { Component } from "react"
import classes from "./InputForm.module.css"

class InputForm extends Component {

  state = {
    city: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSub(this.state.city)
    this.setState({
      city: ""
    })
  }

  onChange = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className={classes.Form}>
        <input type="text" placeholder="Enter City" onChange={this.onChange} value={this.state.city} />
        <button>Submit</button>
      </form>
    )
  }
}

export default InputForm