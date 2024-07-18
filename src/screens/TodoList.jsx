import React, { useState } from "react";
import './TodoList.css'
import Dashboard from "./Dashboard";
import TaskForm from "./TaskForm";

const TodoList = () => {

  const [todoList, setTodoList] = useState([]);
   const [searchStatus, setSearchStatus] = useState("");
const [searchVal, setSearchVal] = useState("");



  return (
    <>
    
  <TaskForm todoList={todoList} setSearchVal={setSearchVal} searchStatus={searchStatus} searchVal={searchVal} setTodoList={setTodoList} setSearchStatus={setSearchStatus}/>     
<Dashboard searchStatus={searchStatus} searchVal={searchVal} todoList={todoList} setTodoList={setTodoList}/>


    
    </>
  );
};

export default TodoList;
 

