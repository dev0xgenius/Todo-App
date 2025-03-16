import PropTypes from "prop-types";
import { useState } from 'react';
import Button from '../Button/Button.jsx';
import styles from "./todo.module.scss";

export default function Todo(props) {
  const [isComplete, setIsComplete] = useState(props.isCompleted);
  const todoDynamicStyle = (isComplete) ? 
    `${styles.todo} ${styles.completed}` : styles.todo;

  const markTodo = () => {
    setIsComplete(!isComplete);
    props.onMarkComplete(props.id);
  };

  return (
    <li className={todoDynamicStyle} id={props.id}>
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
        img = {<img src="/images/icon-cross.svg" alt=""/>}
        clickHandler={() => props.onDelete(props.id)} 
      />
    </li>
  );
}

Todo.propTypes = {
  id: PropTypes.number,
  isCompleted: PropTypes.bool.isRequired,
  onMarkComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  description: PropTypes.string,
};