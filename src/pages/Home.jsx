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


  return (
    <Container maxWidth="xs" style={{marginTop: "1em"}}>
      <Form addTodo={addTodo}/>
      <List sx={{ bgcolor: "background.paper", marginTop: "1em" }}>
        {todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem todo={todo} deleteTodo={deleteTodo}/>
          </div>     
        ))}
      </List>
    </Container>
  );
}
