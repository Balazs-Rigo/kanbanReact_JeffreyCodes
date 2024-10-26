export type Status = 'todo' | 'in-progress' | 'done'
export type Priority = 'low' | 'medium' | 'high'
export type Task = {
  title: string,
  id: string,
  status: Status,
  priority: Priority
  points?: number
}

export const statuses: Status[] = ['todo', 'in-progress', 'done']
export const priorities: Priority[] = ['low', 'medium', 'high']

export const tasks: Task[] = [
  {
    title: 'Do Market Reasearch',
    id: 'BUS-1',
    status: 'todo',
    points: 5,
    priority: 'high'
  },
  {
    title: 'Custom Analysis',
    id: 'BUS-2',
    status: 'done',
    points: 2,
    priority: 'medium'
  },
  {
    title: 'Develop Business strategy',
    id: 'BUS-11',
    status: 'in-progress',
    points: 8,
    priority: 'low'
  },
  {
    title: 'Develop Market strategy',
    id: 'BUS-14',
    status: 'in-progress',
    points: 5,
    priority: 'low'
  }
]

export default Task