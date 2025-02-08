import React from "react";

class TodoAction extends React.Component {
  render() {
    return (
      <>
        <button className="action btn">
          {this.props.displayText}
        </button>
      </>
    );
  }
}

export default TodoAction