'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function TodoCreator({ initialTodos }) {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState(initialTodos)
  const router = useRouter()

  async function addTodo(event) {
    event.preventDefault()
    if (!title.trim()) return
    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    })
    const todo = await response.json()
    setTodos(current => [todo, ...current])
    setTitle('')
    router.refresh()
  }

  async function toggleTodo(id) {
    const response = await fetch(`/api/todos/${id}`, { method: 'PATCH' })
    const updated = await response.json()
    setTodos(current => current.map(todo => todo.id === id ? updated : todo))
  }

  return (
    <div className="mt-8">
      <form onSubmit={addTodo} className="flex gap-3">
        <input value={title} onChange={event => setTitle(event.target.value)} placeholder="Add a task..." className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-400" />
        <button className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950">Add</button>
      </form>
      <ul className="mt-6 space-y-3">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 p-4">
            <button onClick={() => toggleTodo(todo.id)} className={`text-left ${todo.completed ? 'text-slate-500 line-through' : 'text-slate-100'}`}>
              {todo.title}
            </button>
            <Link href={`/todos/${todo.id}`} className="text-sm text-cyan-300 hover:underline">Details</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
