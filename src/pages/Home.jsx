import { Container, List } from '@mui/material'
import React, { useState } from 'react'
import TodoItem from '../components/TodoItem'
import Form from '../components/Form'

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered)
  };

  const editTodo = (id, editedText) => {
    //console.log(id);
    //console.log(editedText);
    //console.log(todos);
    var todosArray = [...todos];

    todosArray.splice(id, 1, { text: editedText, id: id });
    setTodos(todosArray);
  }


  return (
    <Container maxWidth="xs" style={{marginTop: "1em"}}>
      <Form addTodo={addTodo}/>
      <List sx={{ bgcolor: "background.paper", marginTop: "1em" }}>
        {todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo}/>
          </div>     
        ))}
      </List>
    </Container>
  );
}
