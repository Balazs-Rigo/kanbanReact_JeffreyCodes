export type Status = 'todo' | 'in-progress' | 'done'
export type Task ={
    title: string,
    id:string,
    status: Status,
    points?: number
  }

  export const statuses: Status[] = ['todo', 'in-progress', 'done']

  export const tasks: Task[] = [
    {
      title: 'Do Market Reasearch',
      id: 'BUS-1',
      status: 'todo',
      points: 5,
    },
    {
      title: 'Custom Analysis',
      id: 'BUS-2',
      status: 'done',
      points: 2,
    },
    {
      title: 'Develop Business strategy',
      id: 'BUS-11',
      status: 'in-progress',
      points: 8,
    },
    {
      title: 'Develop Market strategy',
      id: 'BUS-1',
      status: 'in-progress',
      points: 5,
    }
  ]

  export default Task