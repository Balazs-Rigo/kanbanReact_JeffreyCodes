import { useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard'
import { tasks as initialTasks, statuses, Status, Task } from './utils/data-tasks'

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const columns = statuses.map((status) => {
    const taskIncolumn = tasks.filter((task) => task.status === status)
    return {
      status,
      tasks: taskIncolumn
    }
  })

  const updateTask = (task: Task) => {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? task : t
    })
    setTasks(updatedTasks)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status)=>{
    e.preventDefault()
    setCurrentlyHoveringOver(null)
    const id = e.dataTransfer.getData("id")
    const task = tasks.find((task) => task.id === id)
    if (task) {
      updateTask({...task, status})
    }
  }

  const [currentlyHoveringOver, setCurrentlyHoveringOver] = useState<Status | null>(null)
  const handleDragEnter = (status: Status) => {
    setCurrentlyHoveringOver(status)
  }

  return (
    <div className='flex divide-x border-3 border-green-800'>
      {columns.map((column) => (
        <div 
        onDrop={(e) => handleDrop(e, column.status)} 
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={() => handleDragEnter(column.status) }
        >
          <div className='flex justify-between text-3xl p-2 font-bold text-gray-700 border-3 border-green-800'>
            <h2 className='capitalize border-green'>{column.status}</h2>
            {column.tasks.reduce((total, task) => total + (task.points || 0), 0)}
          </div>
          <div className={`h-full ${currentlyHoveringOver === column.status ? 'bg-gray-200': ''}`}>
          {column.tasks.map((task) => (
            <TaskCard
              task={task}
              updateTask={updateTask}
            />))}
            </div>
        </div>
      ))}
    </div>

  )
}

export default App
