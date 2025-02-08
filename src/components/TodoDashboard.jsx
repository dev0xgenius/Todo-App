import React from "react";
import TodoForm from './TodoForm'
import TodoList from "./TodoList";
import TodoInfo from "./TodoInfo";
import ActionList from "./ActionList";

class TodoDashboard extends React.Component {
  render() {
    let items = Math.floor(Math.random(0, 10) * 100);
    return (
      <>
        <TodoForm />
        <div className='col'>
          <TodoList />
          <TodoInfo items={items}/>
        </div>
        <ActionList />
      </>
    );
  }
}

export default TodoDashboard