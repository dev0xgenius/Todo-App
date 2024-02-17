import React from "react";
import TodoForm from './TodoForm'
import TodoInfo from "./TodoInfo";
import Todos from './Todos';
import Actions from "./Actions";

class TodoDashboard extends React.Component {
  state = {
    todos: [
      {task: "Complete the javascript course", completed: true, id: 5},
      {task: "Jog around the park 3x", completed: false, id: 0},
      {task: "10 minutes meditation", completed: false, id: 1},
      {task: "Read for 1hour", completed: false, id: 2},
      {task: "Pick up groceries", completed: false, id: 3},
      {task: "Complete Todo App on Frontend Mentro", completed: false, id: 4}
    ],
    sortedTodos: [],
  }

  componentDidMount() {
    this.setState({
      sortedTodos: this.state.todos.concat()
    });
  }

  handleForm = (formChildren) => {
    this.createTodo(formChildren);
  }

  createTodo = (formChildren) => {
    const todos = this.state.todos;
    const idExists = (id) => {
      for (let todo of todos)
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

    const updatedTodos = todos.concat([newTodo]);
    this.setState({
      todos: updatedTodos,
      sortedTodos: updatedTodos
    });
  }

  markComplete = (id) => {
    let updatedTasks = this.state.todos.concat();

    for (let i = 0; i < updatedTasks.length; i++) {
      if (updatedTasks[i].id === id) {
        updatedTasks[i].completed = !updatedTasks[i].completed;
        this.setState({todos: updatedTasks});
      }
    }

  }

  deleteTodo = (todoID) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoID),
      sortedTodos: this.state.todos.filter(todo => todo.id !== todoID)
    })
  }

  clearCompleted = () => {
    this.setState({
    todos: this.state.todos.filter(todo => todo.completed === false),
    sortedTodos: this.state.todos.filter(todo => todo.completed === false)
    })
  }

  showAll = () => {
    this.setState({
      sortedTodos: this.state.todos.concat()
    })
  }

  showActive = () => {
    this.setState({
      sortedTodos: this.state.todos.filter(todo => todo.completed === false)
    })
  }

  showCompleted = () => {
    this.setState({
      sortedTodos: this.state.todos.filter(todo => todo.completed === true)
    })
  }

  render() {
    return (
      <>
        <TodoForm
          title={"Create a new Todo"}
          handleForm={this.handleForm}
        />
        <div className="col">
          <Todos
            todos={this.state.sortedTodos}
            onDelete={this.deleteTodo}
            onMarkComplete={this.markComplete}
          />
          <TodoInfo
            items={this.state.sortedTodos.length}
            onClearCompleted={this.clearCompleted}
          />
        </div>
        <Actions 
          showAll={this.showAll}
          showActive={this.showActive}
          showCompleted={this.showCompleted}
        />
      </>
    );
  }
}

export default TodoDashboard