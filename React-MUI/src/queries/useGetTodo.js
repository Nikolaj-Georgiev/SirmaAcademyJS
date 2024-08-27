import { useQuery } from "@tanstack/react-query";
import { todosKeys } from "./query-keys";
import todoService from "../services/todoService";

export function useGetTodo(todoId) {
  const todoQuery = useQuery({
    queryKey: todosKeys.one(todoId),
    queryFn: () => todoService.getOne(todoId),
  })

  return todoQuery;
}