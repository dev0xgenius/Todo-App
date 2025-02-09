import React from "react";
import TodoForm from './TodoForm'
import TodoInfo from "./TodoInfo";
import Todo from "./Todo";
import TodoAction from "./TodoAction";

class TodoDashboard extends React.Component {
  state = {
    todos: [],
    actions: []
  }
  
  componentDidMount() {
    this.setState({
      todos: [
        {task: "Go to school", completed: false},
        {task: "Smoke blunt before evening", completed: false},
        {task: "Read five books today", completed: false},
        {task: "Eat shawarma", completed: false},
        {task: "Workout for five minutes", completed: false} ],
      actions: [
        {text: "All", action: () => {console.log("Show all tasks...");}},
        {text: "Active", action: () => {console.log("Show all active tasks")}},
        {text: "Completed", action: () => {console.log("show completed tasks");}}
      ]
    });
  }

  render() {
    return (
      <>
        <TodoForm />
        <div className='col'>
          <ul className="todo-list">
            {this.state.todos.map((todo, index) => <Todo
                task={todo.task}
                completed={todo.completed}
                key={index}
                /> )}
          </ul>
          <TodoInfo items={this.state['todos'].length}/>
        </div>
        <ul className="action-list">
          {this.state.actions.map((action, index) => 
              <TodoAction 
                text={action.text}
                action={action.action}
                key={index}
              />
            )}
        </ul>
      </>
    );
  }
}

export default TodoDashboard