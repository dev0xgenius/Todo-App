import PropTypes from "prop-types";
import Button from '../Button/Button.jsx';

export default function TodosTracker({items, onClearCompleted}) {
  return (
    <div className='todoInfo'>
      <span className='info'>
        {items} items left
      </span>
      <Button
        text="Clear Completed"
        clickHandler={() => onClearCompleted()}
      />
    </div>
  );
};

TodosTracker.propTypes = {
  items: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};