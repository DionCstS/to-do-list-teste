import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import TodoItem from './components/TodoItem';
import { Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth="xs" style={{marginTop: "1rem"}}>
      <Form/>
      <TodoItem/>
    </Container>
  );
}

export default App;
