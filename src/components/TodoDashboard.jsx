import React from "react";
import TodoForm from './TodoForm'
import TodoInfo from "./TodoInfo";
import Todos from './Todos';
import Actions from "./Actions";
import { useState, useEffect } from "react";

export default function TodoDashboard() {
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
    setSortedTodos(currentValue => todos);
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
      task: formChildren[1].value, //Second input element value
      completed: false,
      id: newTimerId
    };
    
    setTodos(currentValue => todoList.concat([newTodo]));
  };

  const markComplete = (id) => {
    let updatedTasks = this.state.todos.concat();

    for (let i = 0; i < updatedTasks.length; i++) {
      if (updatedTasks[i].id === id) {
        updatedTasks[i].completed = !updatedTasks[i].completed;
        setTodos(c => updatedTasks);
        
        break;
      }
    }
  };

  const deleteTodo = (todoID) => {
    setTodos(todoList => todoList.filter(todo => todo.id !== todoID));
  };

  const clearCompleted = () => {
    setTodos(todoList => todoList.filter(todo => todo.completed === false));
  };

  const showAll = () => {
    setSortedTodos(c => todos.concat());
  };

  const showActive = () => {
    setSortedTodos(todoList => todoList.filter(todo => todo.completed === false));
  };

  const showCompleted = () => {
    setSortedTodos(todoList => todoList.filter(todo => todo.completed === true));
  };

  return (
    <div className="todo dashboard">
      <TodoForm
        title={"Create a new Todo"}
        handleForm={createTodo}
      />
      <div className="col">
        <Todos
          todos={sortedTodos}
          onDelete={deleteTodo}
          onMarkComplete={markComplete}
        />
        <TodoInfo
          items={sortedTodos.length}
          onClearCompleted={clearCompleted}
        />
      </div>
      <Actions 
        showAll={showAll}
        showActive={showActive}
        showCompleted={showCompleted}
      />
    </div>
  );
};