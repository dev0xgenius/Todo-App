import { useEffect, useState } from 'react';
import TodoAction from './TodoAction';

function Todo(props) {
  const [isComplete, setIsComplete] = useState();

  const markTodo = () => {
    setIsComplete(!isComplete);
    props.onMarkComplete(props.id);
  };

  const markComplete = () => {
    const todo = document.getElementById(`${props.id}`);
    
    if (props.completed) todo.classList.add('completed');
    else todo.classList.remove('completed');
  }

  useEffect(markComplete, [isComplete]);

  return (
    <li className='todo' id={props.id}>
      <label className="checkboxContainer">
        <input type='checkbox' 
          checked={props.completed}
          onChange={markTodo}
        />
        <span className='checkbox'></span>
        <span className='check'>
          <img src='/images/icon-check.svg' alt=""/>
        </span>
      </label>
      <input type='text'
        defaultValue={props.task}
        readOnly={true}
      />
      <TodoAction
        img={<img src="/images/icon-cross.svg" alt=""/>}
        action={() => props.onDelete(props.id)} />
    </li>
  );
}

export default Todo