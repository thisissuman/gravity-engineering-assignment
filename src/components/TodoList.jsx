import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ todo, deletehandler, isCompleted }) => {
  return (
    <TodoItem
      todo={todo}
      deletehandler={deletehandler}
      isCompleted={isCompleted}
    />
  );
};

export default TodoList;
