export const todosKeys = {
  all: () => ['todos'],
  // all: (page = 0) => ['todos', { page }], за хубаво паджиниране
  one: (todoId) => ['todos', todoId],
  update: () => ['mutate-todo'],
  create: () => ['create-todo']
};