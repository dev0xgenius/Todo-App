import React, { useState } from "react";

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
    <form className="todo-form"
      name="todo-form"
      onSubmit={handleSubmit}
      >
      <label>
        <input type='checkbox'
          name="todo-checked"
          disabled={true}
        />
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