import { NextResponse } from 'next/server'
import { getTodo, toggleTodo } from '../../../../lib/todos'

export async function PATCH(request, { params }) {
  if (!getTodo(params.id)) return NextResponse.json({ error: 'Todo not found' }, { status: 404 })
  return NextResponse.json(toggleTodo(params.id))
}
