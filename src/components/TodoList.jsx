import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {
  render() {
    return (
      <ul className='todo-list'>
        <Todo title="Smoke 5 blunts today"/>
        <Todo title="Spend 5 hours on a coding Project"/>
        <Todo title="Take a walk"/>
        <Todo title="Watch a Movie" />
        <Todo title="Spend some time with friends"/>
      </ul>
    );
  }
}

export default TodoList