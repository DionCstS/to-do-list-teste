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
    var todosArray = [...todos];

    for (var i in todosArray) {
      if (todosArray[i].id == id) {
        todosArray[i].text = editedText;
      }
    }

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
