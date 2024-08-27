import useGerTodos from '../queries/useGetTodos';

export default function Pricing() {
  const todosQuery = useGerTodos();
  return <h1>Pricing</h1>;
}
