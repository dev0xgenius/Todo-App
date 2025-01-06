import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import Button from '../Button/Button.jsx';

export default function Todo(props) {
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
          checked={props.isCompleted}
          onChange={markTodo}
        />
        <span className='checkbox'></span>
        <span className='check'>
          <img src='/images/icon-check.svg' alt=""/>
        </span>
      </label>
      <input type='text'
        defaultValue={props.description}
        readOnly={true}
      />
      <Button
        img={<img src="/images/icon-cross.svg" alt=""/>}
        clickHandler={() => props.onDelete(props.id)} 
      />
    </li>
  );
};

Todo.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  onMarkComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  description: PropTypes.string,
};