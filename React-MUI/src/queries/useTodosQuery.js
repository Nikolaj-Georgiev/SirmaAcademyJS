import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { todosKeys } from "./query-keys";

export default function useTodosQuery() {
  const todosQuery = useQuery({
    queryKey: todosKeys.all(),
    queryFn: getTodos,
    staleTime: 5 * 60 * 1000,
    retry: 0,
    initialData: [],
  });
  return todosQuery;
}

async function getTodos() {
  const result = await axios.get('https://dummyjson.com/todos');
  // const response = await fetch('https://dummyjson.com/todos');
  // const result = await response.json();
  return result.data.todos;
}