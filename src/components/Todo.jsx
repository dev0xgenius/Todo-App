import React from 'react'

class Todo extends React.Component {
  render() {
    return (
      <li className='todo'>
        <label>
          <input type='checkbox' />
          <span className='checkbox'></span>
        </label>
        <input type='text' value={this.props.title}
        onChange={console.log} />
        <span>x</span>
      </li>
    );
  }
}

export default Todo