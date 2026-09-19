import Link from 'next/link'
import TodoCreator from '../components/TodoCreator'
import { getTodos } from '../lib/todos'

// This page is rendered on the server and can be regenerated periodically.
export const revalidate = 60

export default function HomePage() {
  const todos = getTodos()
  return (
    <section>
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Next.js 13 App Router</p>
      <h1 className="mt-3 text-4xl font-bold">Todo Creator</h1>
      <p className="mt-3 max-w-2xl text-slate-400">A small project demonstrating routing, revalidation, data fetching, Server Components, Client Components, route interception, and API Routes.</p>
      <TodoCreator initialTodos={todos} />
      <div className="mt-10 flex gap-4 text-sm text-cyan-300">
        <Link href="/about">About this project →</Link>
        <Link href="/todos/1">Open a todo →</Link>
      </div>
    </section>
  )
}
