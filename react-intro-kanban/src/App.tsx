import './App.css'
import TaskCard from './components/TaskCard'
import { tasks, statuses } from './utils/data-tasks'

function App() {

  const columns = statuses.map((status) => {
    const taskIncolumn = tasks.filter((task) => task.status === status)
    return {
      title: status,
      tasks: taskIncolumn
    }
  })

  return (
    <div className='flex divide-x'>
      {columns.map((column) => (
        <div>
          <h2 className='text-3xl p-2 capitalize font-bold text-gray-700'>{column.title}</h2>
          {column.tasks.map((task) => <TaskCard task={task} />)}
        </div>
      ))}
    </div>

  )
}

export default App
