import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

import Header from './components/Header';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Login from './components/Login';
import Register from './components/Register';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';
import TodoDetails from './components/TodoDetails';
import { Container, CssBaseline } from '@mui/material';
function App() {
  return (
    <AuthContextProvider>
      <CssBaseline />

      <Header />

      <Container
        component='main'
        maxWidth='md'
      >
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/pricing'
            element={<Pricing />}
          />
          <Route
            path='/todos'
            element={<TodoList />}
          />
          <Route
            path='/todos/:todoId'
            element={<TodoDetails />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
          <Route
            path='/todos/add'
            element={<CreateTodo />}
          />
        </Routes>
      </Container>
    </AuthContextProvider>
  );
}

export default App;
