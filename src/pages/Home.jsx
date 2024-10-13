import { Container, List } from '@mui/material'
import React, { useState } from 'react'
import TodoItem from '../components/TodoItem'
import Form from '../components/Form'

export default function Home() {
  const [todos, setTodos] = useState([0,1,3]);
 

  return (
    <Container maxWidth="xs" style={{marginTop: "1rem"}}>
      <Form/>
      <List sx={{ bgcolor: "background.paper", marginTop: "1em" }}>
        {todos.map((todo) => (
            <TodoItem/>
        ))}
      </List>
    </Container>
  )
}
