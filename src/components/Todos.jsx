import { useState } from "react";
import Todo from "./Todo";

function Todos(props) {
  const todos = props.todos.map(todo => (
    <Todo
      task={todo.task}
      completed={todo.completed}
      id={todo.id}
      key={todo.id}
      onDelete={props.onDelete}
      onMarkComplete={props.onMarkComplete}
    />
  ));

  return (
    <ul className="todo-list">{todos}</ul>
  );
}

export default Todos