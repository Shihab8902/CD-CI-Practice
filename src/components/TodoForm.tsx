import { useState } from 'react'
import type { Priority, Todo } from '../types/todo'
import toast from 'react-hot-toast'

interface Props {
  onAdd: (todo: Todo) => void
}

const PRIORITIES: Priority[] = ['low', 'medium', 'high']

export default function TodoForm({ onAdd }: Props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<Priority>('medium')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) {
      toast.error('Title is required')
      return
    }

    onAdd({
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      priority,
      createdAt: Date.now(),
    })

    setTitle('')
    setDescription('')
    setPriority('medium')
    toast.success('Todo added')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Add New Todo</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo title"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (optional)"
        rows={3}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
      />

      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-700">Priority:</span>
        <div className="flex gap-2">
          {PRIORITIES.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPriority(p)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium capitalize cursor-pointer transition ${
                priority === p
                  ? p === 'high'
                    ? 'bg-red-100 text-red-700 ring-2 ring-red-400'
                    : p === 'medium'
                      ? 'bg-yellow-100 text-yellow-700 ring-2 ring-yellow-400'
                      : 'bg-green-100 text-green-700 ring-2 ring-green-400'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
      >
        Add Todo
      </button>
    </form>
  )
}
