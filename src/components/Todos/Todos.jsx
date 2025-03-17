import PropTypes from "prop-types";
import Todo from "../Todo/Todo";
import styles from "./todos.module.scss";

import { DndContext } from '@dnd-kit/core';

export default function Todos(props) {
  // const { isOver, setNodeRef } = useDroppable({ id: "todoList" });
  
  const handleDragEnd = (evt) => {
    const { active, over } = evt;
    if (over) alert(`Todo ${active.id} dropped into ${over.id}`);
  };
  
  const todos = props.todos.map(todo => {
    return <Todo
      description={todo.task}
      isCompleted={todo.completed}
      id={todo.id} 
      key={todo.id}
      onDelete={props.onDelete}
      onMarkComplete={props.onMarkComplete}
    />
  });

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <ul className={styles.todoList}>
        { todos }
      </ul>
      <div></div>
    </DndContext>
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired,
  ),
  
  onDelete: PropTypes.func,
  onMarkComplete: PropTypes.func
};