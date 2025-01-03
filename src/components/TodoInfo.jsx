import TodoAction from './TodoAction';

function TodoInfo({items, onClearCompleted}) {
  return (
    <div className='todoInfo'>
      <span className='info'>
        {items} items left
      </span>
      <TodoAction
        text="Clear Completed"
        action={() => onClearCompleted()}
        />
    </div>
  );
}

export default TodoInfo;