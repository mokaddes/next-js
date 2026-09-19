import { NextResponse } from 'next/server'
import { createTodo, getTodos } from '../../../lib/todos'

export async function GET() {
  return NextResponse.json(getTodos())
}

export async function POST(request) {
  const body = await request.json()
  if (!body.title?.trim()) return NextResponse.json({ error: 'Title is required' }, { status: 400 })
  return NextResponse.json(createTodo(body.title.trim()), { status: 201 })
}
