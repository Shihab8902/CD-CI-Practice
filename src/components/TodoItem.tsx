import type { Todo } from '../types/todo'
import { FiTrash2 } from 'react-icons/fi'

interface Props {
  todo: Todo
  onDelete: (id: string) => void
}

const PRIORITY_STYLES: Record<string, string> = {
  low: 'bg-green-100 text-green-700',
  medium: 'bg-yellow-100 text-yellow-700',
  high: 'bg-red-100 text-red-700',
}

export default function TodoItem({ todo, onDelete }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex items-start justify-between gap-4">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-gray-900 truncate">{todo.title}</h3>
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${PRIORITY_STYLES[todo.priority]}`}>
            {todo.priority}
          </span>
        </div>
        {todo.description && (
          <p className="text-sm text-gray-500">{todo.description}</p>
        )}
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="text-gray-400 hover:text-red-500 transition p-1 cursor-pointer shrink-0"
        title="Delete todo"
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  )
}
