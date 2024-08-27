import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useParams } from 'react-router-dom';
import { useGetTodo } from '../queries/useGetTodo';
import { Switch } from '@mui/material';

export default function TodoDetails() {
  const { todoId } = useParams();
  const todoQuery = useGetTodo(todoId);

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
                disabled
                checked={todoQuery.data.completed}
              />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      )}
    </>
  );
}
