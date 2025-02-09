// import React, { useState } from 'react';
import TodoAction from './TodoAction';

function Todo(props) {
  const updateTodo = () => console.log(props.completed);
  return (
    <li className='todo'>
      <label>
        <input type='checkbox' 
          checked={props.completed}
          onChange={updateTodo}
        />
        <TodoAction
          text=""
          className="checkbox"
          action={() => props.markComplete(props.id)}
          />
      </label>
      <input type='text'
        defaultValue={props.task}
        disabled={true}
      />
      <TodoAction
        text="X"
        action={() => props.deleteTodo(props.id)}/>
    </li>
  );
}

export default Todo