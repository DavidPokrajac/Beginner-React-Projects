import React from "react"
import classes from "./RemoveAllTodos.module.css"

const DeleteAllTodos = (props) => {
  return( 
    <div className={classes.Div}>
      <button onClick={() => props.removeAllTodos("")}>Delete All Todos</button>
    </div>
  )
}

export default DeleteAllTodos