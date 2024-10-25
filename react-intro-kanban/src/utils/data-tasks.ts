export type Task ={
    title: string,
    id:string,
    points?: number
  }

  export const tasks: Task[] = [
    {
      title: 'Do Market Reasearch',
      id: 'BUS-1',
      points: 5,
    },
    {
      title: 'Custom Analysis',
      id: 'BUS-2',
      points: 2,
    },
    {
      title: 'Develop Business strategy',
      id: 'BUS-11',
      points: 8,
    },
    {
      title: 'Develop Market strategy',
      id: 'BUS-1',
      points: 5,
    }
  ]

  export default Task