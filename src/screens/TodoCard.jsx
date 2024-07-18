import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
const style = {
  cardStyle: {
    maxWidth: 150,
    margin: 5,
    marginTop: 4,
    backgroundImage: "linear-gradient(to right, #e6ccff,  #f2e6ff)",
  },
  titleStyle: {
    marginTop: 5,
    fontWeight: 800,
    fontSize: 20,
    textDecoration: "underline",
  },
};

const TodoCard = ({
  title,
  id,
  description,
  status,
  todoList,
  setTodoList,
}) => {
  const deleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const editTodo = (id) => {
    console.log("edit", id);
  };
  return (
    <Card style={style.cardStyle} key={id}>
      <Typography style={style.titleStyle}>{title} </Typography>
      <Typography>{description}</Typography>
      <Typography sx={{ fontSize: 16 }}> {status}</Typography>

      <CardActions style={{ justifyContent: "flex-end" }}>
        <EditIcon onClick={() => editTodo(id)} />
        <DeleteIcon onClick={() => deleteTodo(id)} />
      </CardActions>
    </Card>
  );
};

export default TodoCard;
