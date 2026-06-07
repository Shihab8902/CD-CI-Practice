import { useState } from 'react'
import type { Todo } from '../types/todo'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { useAuth } from '../context/AuthContext'
import { FiLogOut } from 'react-icons/fi'

export default function Todos() {
  const { logout } = useAuth()
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (todo: Todo) => {
    setTodos((prev) => [todo, ...prev])
  }

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">My Todos</h1>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition cursor-pointer"
          >
            <FiLogOut size={16} />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <TodoForm onAdd={handleAdd} />
        <TodoList todos={todos} onDelete={handleDelete} />
      </main>
    </div>
  )
}
