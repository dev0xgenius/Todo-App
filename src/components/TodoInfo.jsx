import React from 'react'
import TodoAction from './TodoAction';

class TodoInfo extends React.Component {
  render() {
    return (
      <>
        <div className='todoInfo'>
          <span className='info'>0 items left</span>
          <TodoAction displayText="Clear Completed"/>
        </div>
      </>
    );
  }
}

export default TodoInfo