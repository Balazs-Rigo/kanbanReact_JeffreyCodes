import Task from "../utils/data-tasks";

const lowPriorityIcon = <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 80.593" enable-background="new 0 0 122.88 80.593"><g><polygon points="122.88,0 122.88,30.82 61.44,80.593 0,30.82 0,0 61.44,49.772 122.88,0" /></g></svg>

const TaskCard = ({ task }: {
  task: Task
}) => {
  return <div className="border rounded-lg px-2 m-2 bg-gray-100 w-52">
    <div className='text-base font-base py-2'>{task.title}</div>
    <div className='flex gap-4 justify-between py-2 text-gray-700 text-sm'>
      <div className="flex gap-2">
        <div>{task.id}</div>
        {task.priority === 'high' && lowPriorityIcon}
        {task.priority === 'medium' && lowPriorityIcon}
        {task.priority === 'low' && lowPriorityIcon}
      </div>
      <div>{task.points}</div>
    </div>
  </div>
};

export default TaskCard;