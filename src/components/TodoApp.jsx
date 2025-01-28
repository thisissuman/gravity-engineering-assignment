import { useEffect, useState } from "react";
import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import TodoFilter from "./TodoFilter";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [originalTodos, setOriginalTodos] = useState([]);
  const gettodolist = async () => {
    const getdata = await fetch("https://dummyjson.com/todos?limit=3");
    const res = await getdata.json();
    setTodos(res.todos);
    setOriginalTodos(res.todos);
    localStorage.setItem("todos", JSON.stringify(res.todos));
  };

  useEffect(() => {
    gettodolist();
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const additemhandler = (newvalue) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), completed: false, todo: newvalue },
    ]);
    setOriginalTodos((prev) => [
      ...prev,
      { id: prev.length + 1, completed: false, todo: newvalue },
    ]);
  };

  const deletehandler = (id) => {
    const filtereditem = todos.filter((todo) => todo.id !== id);
    setTodos(filtereditem);
    setOriginalTodos(filtereditem);
  };

  const isCompleted = (id) => {
    const updatedtodo = todos.map((todo) =>
      todo.id == id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedtodo);
    setOriginalTodos(updatedtodo);
  };

  const getFiltred = (filtername) => {
    if (filtername === "all") {
      setTodos(originalTodos);
    } else if (filtername === "pending") {
      setTodos(originalTodos.filter((todo) => !todo.completed));
    } else if (filtername === "completed") {
      setTodos(originalTodos.filter((todo) => todo.completed));
    }
  };

  return (
    <div className="todo-app">
      <AddTodo additemhandler={additemhandler} />
      <TodoFilter getFiltred={getFiltred} />
      {todos.map((todo) => (
        <TodoList
          todo={todo}
          key={todo?.id}
          deletehandler={deletehandler}
          isCompleted={isCompleted}
        />
      ))}
    </div>
  );
};

export default TodoApp;
