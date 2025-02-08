import React from "react";
import TodoForm from './TodoForm'
import TodoList from "./TodoList";
import TodoInfo from "./TodoInfo";
import ActionList from "./ActionList";

class TodoDashboard extends React.Component {
  render() {
    return (
      <>
        <TodoForm />
        <div className='col'>
          <TodoList />
          <TodoInfo />
        </div>
        <ActionList />
      </>
    );
  }
}

export default TodoDashboard