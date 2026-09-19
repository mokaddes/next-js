let todos = [
  { id: 1, title: 'Learn the Next.js App Router', completed: true },
  { id: 2, title: 'Build a Todo Creator', completed: false },
  { id: 3, title: 'Practice server and client components', completed: false }
]

export function getTodos() {
  return todos
}

export function getTodo(id) {
  return todos.find(todo => todo.id === Number(id))
}

export function createTodo(title) {
  const todo = { id: Date.now(), title, completed: false }
  todos = [todo, ...todos]
  return todo
}

export function toggleTodo(id) {
  todos = todos.map(todo => todo.id === Number(id) ? { ...todo, completed: !todo.completed } : todo)
  return getTodo(id)
}

export function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== Number(id))
}
