// import React, { useState } from 'react';
import TodoAction from './TodoAction';

function Todo({task, completed}) {
  return (
    <li className='todo'>
      <label>
        <input type='checkbox' 
          checked={completed}
          onChange={() => console.log(completed)}
        />
        <span className='checkbox'></span>
      </label>
      <input type='text'
        value={task}
        onChange={console.log}
        disabled={completed === true ? false : true}
      />
      <TodoAction text="X" action={() => console.log("Delete")}/>
    </li>
  );
}

export default Todo