import type { Todo } from '../types/todo'
import TodoItem from './TodoItem'

interface Props {
  todos: Todo[]
  onDelete: (id: string) => void
}

export default function TodoList({ todos, onDelete }: Props) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <p className="text-lg">No todos yet</p>
        <p className="text-sm mt-1">Add one above to get started</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  )
}
