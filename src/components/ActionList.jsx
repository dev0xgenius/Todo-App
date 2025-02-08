import React from "react";
import TodoAction from "./TodoAction";

class ActionList extends React.Component {
  render() {
    return (
      <>
        <ul className="action-list">
          <TodoAction displayText="All" />
          <TodoAction displayText="Active" />
          <TodoAction displayText="Completed" />
        </ul>
      </>
    );
  }
}

export default ActionList;