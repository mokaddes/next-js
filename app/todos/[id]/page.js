import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTodo } from '../../../lib/todos'

export const revalidate = 60

export default function TodoPage({ params }) {
  const todo = getTodo(params.id)
  if (!todo) notFound()
  return (
    <section>
      <Link href="/" className="text-cyan-300">← Back home</Link>
      <h1 className="mt-8 text-3xl font-bold">{todo.title}</h1>
      <p className="mt-3 text-slate-400">Status: {todo.completed ? 'Completed' : 'In progress'}</p>
    </section>
  )
}
