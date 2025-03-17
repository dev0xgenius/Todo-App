import PropTypes from "prop-types";
import { useState } from 'react';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import Button from '../Button/Button.jsx';
import styles from "./todo.module.scss";

export default function Todo(props) {
  const [isComplete, setIsComplete] = useState(props.isCompleted);
  const draggable = useDraggable({ id: props.id });
  const droppable = useDroppable({ id: props.id });
  
  const todoDynamicStyle = (isComplete) ? `${styles.todo} ${styles.completed}` : styles.todo;

  const markTodo = () => {
    setIsComplete(!isComplete);
    props.onMarkComplete(props.id);
  };

  return (
    <li className={todoDynamicStyle} id={props.id} ref={droppable.setNodeRef}
      style={draggable.transform ? {
        cursor: "grab",
        borderRadius: ".5rem",
        border: "3px solid var(--color-6)",
        overflow: "hidden",
        transform: `translateY(${draggable.transform.y}px)`,
      } : {
        touchAction: "none"
      }}
    >
    <div className={styles.container}>
      <label className="checkboxContainer">
        <input type='checkbox'
          checked={props.isCompleted}
          onChange={markTodo}
        />
        <span className='checkbox'></span>
        <span className='check'>
          <img src='/images/icon-check.svg' alt="" />
        </span>
      </label>
      <input ref={draggable.setNodeRef} type='text'
        defaultValue={props.description}
        readOnly={true} {...draggable.listeners} {...draggable.attributes}
      />
      <Button
        img={<img src="/images/icon-cross.svg" alt="" />}
        clickHandler={() => props.onDelete(props.id)}
      />
    </div>
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