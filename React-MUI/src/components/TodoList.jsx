import * as React from 'react';

import List from '@mui/material/List';

import useTodosQuery from '../queries/useTodosQuery';
import { useTodosUpdate } from '../queries/useTodosUpdate';
import TodoListItem from './TodoListItem';

export default function TodoList() {
  // const [todos, setTodos] = useGetTodos();

  const todosQuery = useTodosQuery();
  const todoMutation = useTodosUpdate();

  const todoClickHandler = (todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    todoMutation.mutate(updatedTodo);
  };

  return (
    <>
      <h1>Todo list</h1>
      {todosQuery.isError ? (
        <div>{todosQuery.error.message}</div>
      ) : todosQuery.isFetching ? (
        <div>Loading todos...</div>
      ) : (
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {todosQuery.data.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              clickHandler={todoClickHandler}
            />
          ))}
        </List>
      )}
    </>
  );
}

// const useGetTodos = () => {
//   const [todos, setTodos] = React.useState([]);

//   React.useEffect(() => {
//     (async () => {
//       const response = await fetch('https://dummyjson.com/todos');
//       const result = await response.json();
//       setTodos(result.todos);
//     })();
//   }, []);

//   return [todos, setTodos];
// };
