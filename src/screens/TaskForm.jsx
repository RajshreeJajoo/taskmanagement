import React, { useState } from "react";
import { SearchOutlined } from "@mui/icons-material";

const TaskForm = ({todoList,setSearchVal,setTodoList,searchVal}) => {

    const [todos, setTodos] = useState({
        title: "",
        description: "",
        status: "",
        
      });
    
      const submitData = (e) => {
        e.preventDefault();
        if(todos.description !== '' &&  todos.title !== '' && todos.status !=='')
        {
          let arr = [...todoList]
          todos.id = Date.now().toString();
          arr.push(todos)
          setTodoList(arr)
          setTodos({ title: "", description: "", status: "" });
        }
        else
        {
          alert('Please fill all the fields')
        }
       
      };
     const handleSearchClick=() =>{
     setTodoList(todoList); 
      const filterBySearch = todoList?.map(item => item.status).filter((item) => {
         if (item === searchVal) { 
          return item; }
    })
    setTodoList(filterBySearch);
    }
  return (
   <>
      <form>
        <input
          type="text"
          style={{ width: "30%", margin: 20, height: 40, textAlign: "center" }}
          placeholder="Please Enter Title"
          value={todos.title}
          onChange={(e) => setTodos({ ...todos, title: e.target.value })}
        />

        <textarea
          type="text"
          style={{
            width: "30%",
            marginBottom:-40,
            marginTop: 20,
            textAlign: "center",
            paddingTop: 20,
          }}
          placeholder="Please Write Description"
          rows={4}
          cols={4}
          value={todos.description}
          onChange={(e) => setTodos({ ...todos, description: e.target.value })}
        />

        <select
          style={{
            width: "30%",
            margin: 20,
            marginTop: 10,
            height: 40,
            textAlign: "center",
          }}
          value={todos.status}
          onChange={(e) => setTodos({ ...todos, status: e.target.value })}
        >
          <option value="Choose the status">Select status</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <button
          type="submit"
          style={{ width: "40%", marginTop: 60,marginBottom:20, backgroundColor: "green" }}
          onClick={submitData}
        >
          Submit
        </button>
      </form>


 <div style={{marginLeft:'80%',display:'flex'}}>
 <select style={{
            width: "50%",
            marginBottom: 20,
            marginTop: 10,
            height: 40,
            textAlign: "center",
          }}
          onChange={(e) => setSearchVal(e.target.value)}>
        
          <option value="All">All</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <div style={{marginTop:10 ,display:'none'}}>
        <SearchOutlined  fontSize="small" onClick={handleSearchClick}/>

        </div>
       
 </div>
   </>
  )
}

export default TaskForm