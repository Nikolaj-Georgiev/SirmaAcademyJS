import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { todosKeys } from '../queries/query-keys';

export default function CreateTodo() {
  const { id: userId } = useAuthContext();
  const queryClient = useQueryClient();
  const createTodoMutation = useMutation({
    mutationFn: createTodo,
    mutationKey: todosKeys.create(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: todosKeys.all(),
        exact: true,
      });
    },
    // update cash manually from response
    // onSuccess: (data) => {
    //   queryClient.setQueryData(todosKeys.all(), (oldCash) => {
    //     const newData = [...oldCash, data];
    //     return newData;
    //   }); //супер як метод да си опресниш локално тодотата, без да правиш нова заявка!!!
    // },
  });
  const navigate = useNavigate();

  function formSubmitHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    createTodoMutation.mutate({ title: formData.get('title'), userId });
    navigate('/todos');
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <TextField
        id='standard-basic'
        label='Title'
        name='title'
        variant='standard'
      />
      <LoadingButton
        type='submit'
        loading={createTodoMutation.isPending ? true : false}
        variant='outlined'
      >
        <span>Create</span>
      </LoadingButton>
    </form>
  );
}

async function createTodo({ title, userId }) {
  return await axios.post('https://dummyjson.com/todos/add', {
    todo: title,
    completed: false,
    userId,
  });
}
