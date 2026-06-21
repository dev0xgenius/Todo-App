import TodoForm from "../TodoForm/TodoForm";
import TodosTracker from "../TodosTracker/TodosTracker";
import Todos from '../Todos/Todos';
import ToolBar from "../ToolBar/ToolBar";
import { useState, useEffect } from "react";
import styles from "./dashboard.module.scss";

const DEFAULT_TODOS = [
  {task: "Complete the javascript course", completed: true, id: 628},
  {task: "Jog around the park 3x", completed: false, id: 256},
  {task: "10 minutes meditation", completed: false, id: 993},
  {task: "Read for 1hour", completed: false, id: 873},
  {task: "Pick up groceries", completed: false, id: 124},
  {task: "Complete Todo App on Frontend Mentor", completed: false, id: 987}
];

function loadTodos() {
  try {
    const saved = localStorage.getItem("todos");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length) return parsed;
    }
  } catch {}
  return DEFAULT_TODOS;
}

let nextId = Date.now();

export default function Dashboard() {
  const [todos, setTodos] = useState(loadTodos);
  const [sortedTodos, setSortedTodos] = useState([]);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  useEffect(() => {
    setSortedTodos(() => todos.concat());
  }, [todos]);

  const createTodo = (formChildren) => {
    const newTodo = {
      task: formChildren[1].value,
      completed: false,
      id: nextId++,
    };
    
    setTodos((prev) => prev.concat([newTodo]));
  };

  const markComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const showAll = () => setSortedTodos((prev) => todos.concat());
  const deleteTodo = (todoID) => setTodos(todos => todos.filter(todo => todo.id !== todoID));
  const clearCompleted = () => setTodos(todos => todos.filter(todo => todo.completed == false));
  const showActive = () => setSortedTodos(() => todos.filter(todo => todo.completed == false));
  const showCompleted = () => setSortedTodos(() => todos.filter(todo => todo.completed == true));
  
  const swapTodos = (todo1, todo2) => {
    if (todo1 === todo2) return;
    todo1 = sortedTodos.find(todo => todo.id === todo1);
    todo2 = sortedTodos.find(todo => todo.id === todo2);
    
    const updatedTodos = sortedTodos.map(todo => {
      if (todo === todo1) return todo2;
      else if (todo === todo2) return todo1;
      
      return todo;
    });

    setSortedTodos(() => updatedTodos);
  }

  const actions = [
    {text: "All", action: showAll},
    {text: "Active", action: showActive},
    {text: "Completed", action: showCompleted}
  ];
  
  return (
    <div className={styles.todoDashboard}>
      <TodoForm
        open={true}
        handler={createTodo}
        placeholderText="Create a new Todo"
      />
      <div className={styles.col}>
        <Todos
          todos={sortedTodos}
          swapTodos={swapTodos}
          onDelete={deleteTodo}
          onMarkComplete={markComplete}
        />
        <TodosTracker
          items={sortedTodos.length}
          onClearCompleted={clearCompleted}
        />
      </div>
      <ToolBar tools={actions} />
    </div>
  );
}
