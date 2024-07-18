import React from 'react'
import TodoCard from './TodoCard';
const Dashboard = ({searchVal,todoList,setTodoList}) => {

  return (
  //   <div className="grid-container">  
  //   {(searchVal === "" || searchVal === 'All') ?
  //   todoList?.map((item,index) => (
  //     <TodoCard status={item.status} id={item.id} title={item.title} description={item.description} key={index} todoList={todoList} setTodoList={setTodoList}/>
  //     ))
  //   : 
  //   todoList?.map((item,index) => {
  //   if(item.status === searchVal)
  //   {
  //     return (
  //       <TodoCard status={item.status} title={item.title} description={item.description} key={index} todoList={todoList} setTodoList={setTodoList}/>
  //     )
    
  //   }  
  //   })
  //   } 
  // </div> 
  

    <div className="grid-container">  
    {(searchVal === "" || searchVal === 'All') ?
    todoList?.map((item,index) => (
      <TodoCard status={item.status} id={item.id} title={item.title} description={item.description} key={index} todoList={todoList} setTodoList={setTodoList}/>
      ))
    : 
    todoList?.map((item,index) => {
    if(item.status === searchVal)
    {
      return (
        <TodoCard status={item.status} title={item.title} description={item.description} key={index} todoList={todoList} setTodoList={setTodoList}/>
      )
    }  
    }
  
    )
    } 
  </div> 
  )
}

export default Dashboard