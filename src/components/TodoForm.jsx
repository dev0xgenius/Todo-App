import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <form className="todo-form" name="todo-form">
        <label>
          <input type='checkbox' name="todo-data"/>
          <span className="checkbox"></span>
        </label>
        <input type="text" name="createTodo" 
        placeholder="Create a new Todo"/>
      </form>
    );
  }
}

export default TodoForm