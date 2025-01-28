import React from "react";
import { useState } from "react";
const AddTodo = ({ additemhandler }) => {
  const [value, setValue] = useState("");
  const submithandler = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      alert("Please enter a valid todo.");
      return;
    }
    additemhandler(value);
    setValue("");
  };
  return (
    <form className="add-todo-form" onSubmit={(e) => submithandler(e)}>
      <input
        type="text"
        placeholder="write the task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="add-todo-input"
      />
      <button type="submit" className="add-todo-button">
        Add todo
      </button>
    </form>
  );
};

export default AddTodo;
