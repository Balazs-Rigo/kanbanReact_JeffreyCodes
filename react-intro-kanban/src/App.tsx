import './App.css'
import TaskCard from './components/TaskCard'
import Task from './utils/data-tasks'

function App() {
  const task: Task ={
    title: 'Develop Business Strategy',
    id: 'BUS-3',
    points: 5
  }

  return (    
    <>
      <TaskCard task = {task}></TaskCard>
      {/* <TaskCard title='Develop Business Strategy?' id='BUS-666' points='4' ></TaskCard>
      <TaskCard title='Develop Marketing Strategy?' id='BUS-666'></TaskCard> 
       {card('Competitor Analyst', 'BUS-2', 3)}
      {card('Develop Business Strategy', 'BUS-3', 5)}
      {card('Develop Marketing Strategy', 'BUS-4', 7)} */}
    </>

  )
}

export default App
