import { Container, List } from '@mui/material'
import React from 'react'
import TodoItem from '../components/TodoItem'
import Form from '../components/Form'

export default function Home() {
  return (
    <Container maxWidth="xs" style={{marginTop: "1rem"}}>
      <Form/>
      <List sx={{ bgcolor: 'background.paper', marginTop: "1em"}}>
        <TodoItem/>
      </List>
    </Container>
  )
}
