import { useMutation, useQueryClient } from '@tanstack/react-query';

import todoService from '../services/todoService';
import { todosKeys } from './query-keys';

export function useTodosUpdate() {
  const queryClient = useQueryClient();

  const todoMutation = useMutation({
    mutationFn: todoService.update,
    mutationKey: todosKeys.update(),
    onSuccess: ({ data }) => {
      queryClient.setQueryData(todosKeys.all(), (oldTodos) =>
        oldTodos.map(todo => todo.id === data.id ? data : todo)
      );
    }
  })

  return todoMutation;
}

