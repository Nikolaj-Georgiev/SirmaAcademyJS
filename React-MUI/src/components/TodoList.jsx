import * as React from 'react';

import { Container, CssBaseline } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

export default function TodoList() {
  const [todos, setTodos] = useGetTodos();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (todo) => () => {
    const currentIndex = checked.indexOf(todo);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(todo);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Container
      component='main'
      maxWidth='xs'
    >
      <CssBaseline />
      <h1>Todo list</h1>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) => {
          const labelId = `checkbox-list-label-${todo.id}`;

          return (
            <ListItem
              key={todo.id}
              secondaryAction={
                <IconButton
                  edge='end'
                  aria-label='comments'
                >
                  <CommentIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(todo)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge='start'
                    checked={checked.indexOf(todo) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={`Line item ${todo.todo}`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}

const useGetTodos = () => {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch('https://dummyjson.com/todos');
      const result = await response.json();
      setTodos(result.todos);
    })();
  }, []);

  return [todos, setTodos];
};
