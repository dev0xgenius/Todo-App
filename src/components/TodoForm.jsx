import React, { useState } from "react";

function TodoForm(props) {  
  const [formValue, setFormValue] = useState("");

  const handleSubmit = (event) =>  {
    event.preventDefault();
    props.handleForm(event.target.children);
    updateFormValue();
  }

  function updateFormValue() {
    setFormValue("");
    document.getElementById('todoData')
      .value="";
  }

  return (
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
        id="todoData"
        placeholder={props.title}
        defaultValue={formValue}
      />
    </form>
  );
}

export default TodoForm