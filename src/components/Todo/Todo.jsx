import PropTypes from "prop-types";
import { useState } from 'react';
import { useDraggable } from '@dnd-kit/core'; 
import Button from '../Button/Button.jsx';
import styles from "./todo.module.scss";

export default function Todo(props) {
  const [isComplete, setIsComplete] = useState(props.isCompleted);
  const todoDynamicStyle = (isComplete) ? `${styles.todo} ${styles.completed}` : styles.todo;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: props.id });

  const markTodo = () => {
    setIsComplete(!isComplete);
    props.onMarkComplete(props.id);
  };
  
  return (
    <li className={todoDynamicStyle} id={props.id} ref={setNodeRef}
      style={ transform ? {
        cursor: "grab",
        borderRadius: ".5rem",
        border: "1px solid hsl(236, 9%, 61%)",
        zIndex: "2",
        transform: `translateY(${transform.y}px) scaleX(${ transform.scaleX })`,
        // boxShadow: ".0025rem .00125rem 10rem",
      } : { touchAction: "none"} }
    >
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
        {...listeners } {...attributes}
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