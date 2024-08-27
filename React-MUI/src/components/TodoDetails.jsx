import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useNavigate, useParams } from 'react-router-dom';
import { useGetTodo } from '../queries/useGetTodo';
import { Switch } from '@mui/material';
import { useTodoUpdate } from '../queries/useTodoUpdate';
import useDeleteTodo from '../queries/useDeleteTodo';

export default function TodoDetails() {
  const navigate = useNavigate();
  const { todoId } = useParams();
  const todoQuery = useGetTodo(todoId);
  const updateTodo = useTodoUpdate(todoId);
  const deleteTodo = useDeleteTodo();

  const todoClickHandler = () => {
    const updatedTodo = {
      ...todoQuery.data,
      completed: !todoQuery.data.completed,
    };
    console.log(updatedTodo);
    updateTodo.mutate(updatedTodo);
  };

  const deleteTodoHandler = async () => {
    await deleteTodo.mutate(todoId);

    navigate('/todos');
  };

  return (
    <>
      {todoQuery.isFetching ? (
        <div>Loading data...</div>
      ) : (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image='/static/images/cards/contemplative-reptile.jpg'
            title='green iguana'
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
            >
              {todoQuery.data.todo}
            </Typography>
            <Typography
              variant='body2'
              sx={{ color: 'text.secondary' }}
            >
              <Switch
                checked={todoQuery.data.completed}
                onClick={todoClickHandler}
              />
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={deleteTodoHandler}
              size='small'
            >
              Delete
            </Button>
            {/* <Button size='small'>Edit</Button> */}
          </CardActions>
        </Card>
      )}
    </>
  );
}
