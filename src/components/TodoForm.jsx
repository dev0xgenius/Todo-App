import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div className="todo-form">
        <label>
          <input type='checkbox' />
          <span className="checkbox"></span>
        </label>
        <input type="text" name="createTodo" 
        placeholder="Create a new Todo"/>
      </div>
    );
  }
}

export default TodoForm