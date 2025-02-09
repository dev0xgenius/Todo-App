import TodoAction from './TodoAction';

function TodoInfo({items}) {
  return (
    <div className='todoInfo'>
      <span className='info'>
        {items} items left
      </span>
      <TodoAction
        text="Clear Completed"
        action={console.log}
        />
    </div>
  );
}

export default TodoInfo