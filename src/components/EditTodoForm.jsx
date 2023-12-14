import React, {useState} from "react";

export const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task)
  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("")
  }
  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input 
        className="todo-input" 
        type="text" 
        placeholder="Update Task?"
        value={value}
        onChange={(e) => setValue(e.target.value)}/>
        <button className="todo-btn" type="submit">Update Task</button>
      </form>
    </>
  )
};

