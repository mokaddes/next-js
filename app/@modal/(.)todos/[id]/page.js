import { getTodo } from '../../../../lib/todos'
import CloseModalButton from '../../../../components/CloseModalButton'

export default function TodoModal({ params }) {
  const todo = getTodo(params.id)
  if (!todo) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
        <p className="text-sm uppercase tracking-widest text-cyan-300">Intercepted route</p>
        <h2 className="mt-3 text-2xl font-bold">{todo.title}</h2>
        <p className="mt-3 text-slate-400">Status: {todo.completed ? 'Completed' : 'In progress'}</p>
        <CloseModalButton />
        <a href={`/todos/${todo.id}`} className="ml-3 text-sm text-cyan-300 hover:underline">Open full page</a>
      </div>
    </div>
  )
}
