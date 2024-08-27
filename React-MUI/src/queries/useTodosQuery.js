import { useQuery } from "@tanstack/react-query";
import { todosKeys } from "./query-keys";
import todoService from "../services/todoService";

export default function useTodosQuery() {
  const todosQuery = useQuery({
    queryKey: todosKeys.all(),
    queryFn: todoService.getTodos,
    staleTime: 1 * 60 * 1000,
    // retry: 0,//default 3 times
    initialData: [],
  });
  return todosQuery;
}

