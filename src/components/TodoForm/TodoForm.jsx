import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from "./todoForm.module.scss";

export default function TodoForm(props) {  
  const [formValue, setFormValue] = useState(props.value || "");

  const handleSubmit = (event) =>  {
    event.preventDefault();
    props.handler(event.target.children);
    clearForm(event.target);
  }

  function clearForm(form) {
    setFormValue(fV => "");
    form.querySelector('.todo-data').value="";
  }

  return props.open ? (
    <form className={styles.todoForm} name="todo-form" onSubmit={handleSubmit}>
      <label>
        <input type="checkbox" name="todo-checked" disabled={true} />
        <span className="checkbox"></span>
      </label>
      <input
        type="text" name="todo-data" 
        className="todo-data"
        placeholder={props.placeholderText}
        defaultValue={formValue}
      />
    </form> 
  ) : <></>;
};

TodoForm.propTypes = {
  open: PropTypes.bool.isRequired,
  placeholderText: PropTypes.string,
  handler: PropTypes.func,
};