import PropTypes from "prop-types";
import Button from '../Button/Button.jsx';
import styles from "./todosTracker.module.scss";

export default function TodosTracker({items, onClearCompleted}) {
  return (
    <div className={styles.todosTracker}>
      <span>{items} items left</span>
      <Button
        text="Clear Completed"
        clickHandler={() => onClearCompleted()}
      />
    </div>
  );
}

TodosTracker.propTypes = {
  items: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};