import { useMutation } from "@tanstack/react-query";
import { todosKeys } from "./query-keys";
import todoService from "../services/todoService";

export default function useDeleteTodo(todoId) {

  const deleteMutation = useMutation({
    mutationKey: todosKeys.delete,
    mutationFn: todoService.delete
  });
  return (
    deleteMutation

  );
}