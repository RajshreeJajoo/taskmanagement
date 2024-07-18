import React, { useState } from "react";
import "./TodoList.css";
import Dashboard from "./Dashboard";
import TaskForm from "./TaskForm";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  return (
    <>
      <TaskForm
        todoList={todoList}
        setSearchVal={setSearchVal}
        searchVal={searchVal}
        setTodoList={setTodoList}
      />
      <Dashboard
        searchVal={searchVal}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </>
  );
};

export default TodoList;
