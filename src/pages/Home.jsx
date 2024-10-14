import { Container, List } from '@mui/material'
import React, { useState } from 'react'
import TodoItem from '../components/TodoItem'
import Form from '../components/Form'

export default function Home() {
  const [todos, setTodos] = useState([]);

  const todoHandler = (todo) => {
    //console.log(todo);
    setTodos([...todos, todo]);
  };

 

  return (
    <Container maxWidth="xs" style={{marginTop: "1em"}}>
      <Form todoHandler={todoHandler}/>
      <List sx={{ bgcolor: "background.paper", marginTop: "1em" }}>
        {todos.map((todo, key) => (
          <div key={key}>
            <TodoItem todo={todo}/>
          </div>     
        ))}
      </List>
    </Container>
  );
}
