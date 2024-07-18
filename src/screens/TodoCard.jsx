import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
const TodoCard = ({title,id,description,status,todoList,setTodoList}) => {

  const deleteTodo=(id)=>{
      setTodoList(todoList.filter((item)=>item.id !==id))
  }
  return (
  
    <Card sx={{ maxWidth: 150 ,margin:5,marginTop:4,backgroundImage: "linear-gradient(to right, #e6ccff,  #f2e6ff)"}} key={id}>
      <Typography sx={{marginTop:2,fontWeight:800,fontSize:20,textDecoration:'underline'}}>{title}  </Typography>
        <Typography>{description}</Typography>
        <Typography sx={{fontSize:16}}> {status}</Typography>
    
        <CardActions style={{ justifyContent: "flex-end" }}>
          <EditIcon onClick={() => alert("edit")} />
          <DeleteIcon onClick={() =>deleteTodo(id)} />
        </CardActions>
      </Card>
    
  )
}

export default TodoCard