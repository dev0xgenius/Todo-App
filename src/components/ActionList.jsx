import React from "react";
import TodoAction from "./TodoAction";

class ActionList extends React.Component {
  render() {
    return (
      <>
        <ul className="action-list">
          <li><TodoAction displayText="All" /></li>
          <li><TodoAction displayText="Active" /></li>
          <li><TodoAction displayText="Completed" /></li>
        </ul>
      </>
    );
  }
}

export default ActionList;