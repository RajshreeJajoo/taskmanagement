import React from 'react'
import TodoCard from './TodoCard';
const Dashboard = ({searchStatus,searchVal,todoList,setTodoList}) => {
  return (
    <div className="grid-container">  
    {(searchStatus === "" || searchVal === 'All') ?
    todoList?.map((item,index) => (
      
      <TodoCard status={item.status} id={item.id} title={item.title} description={item.description} key={index} todoList={todoList} setTodoList={setTodoList}/>
      ))
    : 
    todoList?.map((item,index) => {
    if(item.status === searchStatus[0])
    {
      {console.log('index',index)}
      return (
        <TodoCard status={item.status} title={item.title} description={item.description} key={index} todoList={todoList} setTodoList={setTodoList}/>
      )
    
    }  
    })
    } 
  </div> 
  )
}

export default Dashboard