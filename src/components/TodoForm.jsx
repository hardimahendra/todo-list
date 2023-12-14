import React, {useState} from "react";

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue("")
  }
  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input 
        className="todo-input" 
        type="text" 
        placeholder="Have task Today ?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required/>
        <button className="todo-btn" type="submit">Add Task</button>
      </form>
    </>
  )
};

