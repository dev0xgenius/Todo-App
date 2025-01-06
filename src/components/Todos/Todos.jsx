import PropTypes from "prop-types";
import Todo from "../Todo/Todo.jsx";
import { useState } from "react";

export default function Todos(props) {
  const todos = props.todos.map(todo => (
    <Todo
      description={todo.task}
      isCompleted={todo.completed}
      id={todo.id}
      key={todo.id}
      onDelete={props.onDelete}
      onMarkComplete={props.onMarkComplete}
    />
  ));

  return (
    <ul className="todo-list">{ todos }</ul>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    }),
  )
};