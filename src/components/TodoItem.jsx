import React from "react";

const TodoItem = ({ todo, deletehandler, isCompleted }) => {
  return (
    <div className="todo-item-container">
      <p
        onClick={() => isCompleted(todo.id)}
        className={`todo-item ${todo.completed ? "completed" : ""}`}
      >
        {todo.todo}
      </p>
      <button onClick={() => deletehandler(todo.id)} className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
