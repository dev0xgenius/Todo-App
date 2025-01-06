import Button from '../Button/Button.jsx';

export default function TodosTracker({items, onClearCompleted}) {
  return (
    <div className='todoInfo'>
      <span className='info'>
        {items} items left
      </span>
      <Button
        text="Clear Completed"
        action={() => onClearCompleted()}
        />
    </div>
  );
};