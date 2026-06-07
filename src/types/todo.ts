export type Priority = 'low' | 'medium' | 'high'

export interface Todo {
  id: string
  title: string
  description: string
  priority: Priority
  createdAt: number
}
