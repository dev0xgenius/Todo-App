import React from "react";
import TodoForm from '../TodoForm/TodoForm.jsx'
import TodosTracker from "../TodosTracker/TodosTracker.jsx";
import Todos from '../Todos/Todos.jsx';
import ToolBar from "../ToolBar/ToolBar.jsx";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [sortedTodos, setSortedTodos] = useState([]);
  
  useEffect(() => {
    setTodos(todos => [
      {task: "Complete the javascript course", completed: true, id: 5},
      {task: "Jog around the park 3x", completed: false, id: 0},
      {task: "10 minutes meditation", completed: false, id: 1},
      {task: "Read for 1hour", completed: false, id: 2},
      {task: "Pick up groceries", completed: false, id: 3},
      {task: "Complete Todo App on Frontend Mentor", completed: false, id: 4}
    ]);
  }, []);
  
  useEffect(() => {
    setSortedTodos(currentValue => todos.concat());
  }, [todos]);

  const createTodo = (formChildren) => {
    const todoList = todos.concat();
    const idExists = (id) => {
      for (let todo of todoList)
        if (id === todo.id) return true;
      return false;
    };

    let newTimerId = 0;
    while (idExists(newTimerId))
      newTimerId = Math.floor(Math.random(0, 10) * 1000000);

    const newTodo = {
      task: formChildren[1].value,
      completed: false,
      id: newTimerId
    };
    
    setTodos(currentValue => todoList.concat([newTodo]));
  };

  const markComplete = (id) => {
    let updatedTasks = todos.concat();
    
    for (let i = 0; i < updatedTasks.length; i++) {
      if (updatedTasks[i].id === id) {
        updatedTasks[i].completed = !updatedTasks[i].completed;
        setTodos(c => updatedTasks);
        
        break;
      }
    }
  };

  const deleteTodo = (todoID) => 
    setTodos(todoList => todoList.filter(todo => todo.id !== todoID));

  const clearCompleted = () =>
    setTodos(todoList => todoList.filter(todo => todo.completed == false));
  
  const showAll = () => setSortedTodos(c => todos.concat());

  const showActive = () => 
    setSortedTodos((_) => todos.filter(todo => todo.completed == false));

  const showCompleted = () => 
    setSortedTodos((_) => todos.filter(todo => todo.completed == true));

  const actions = [
    {text: "All", action: showAll},
    {text: "Active", action: showActive},
    {text: "Completed", action: showCompleted}
  ];
  
  return (
    <div className="todo dashboard">
      <TodoForm
        open={true}
        handler={createTodo}
        placeholderText="Create a new Todo"
      />
      <div className="col">
        <Todos
          todos={sortedTodos}
          onDelete={deleteTodo}
          onMarkComplete={markComplete}
        />
        <TodosTracker
          items={sortedTodos.length}
          onClearCompleted={clearCompleted}
        />
      </div>
      <ToolBar actions={actions} />
    </div>
  );
};