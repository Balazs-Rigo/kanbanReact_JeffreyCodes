import './App.css'
import TaskCard from './task-card'

function App() {
  const title = 'Develop Business Strategy';
  const id ='BUS-3';
  const points = 5;
  return (
    
    <>
      <TaskCard title={title} id={id} points={points}></TaskCard>
      <TaskCard title='mukodik?' id='BUS-666' points='4' ></TaskCard>
      {/* {card('Competitor Analyst', 'BUS-2', 3)}
      {card('Develop Business Strategy', 'BUS-3', 5)}
      {card('Develop Marketing Strategy', 'BUS-4', 7)} */}
    </>

  )
}

export default App
