import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


const App = () => {

  return (
    <div className='max-w-xl mx-auto p-4 border border-amber-50'>
      <h1 className='text-2xl text-white font-bold mb-4 pt-16'>Task Manager</h1>
      <TaskForm /> 
      <TaskList />
    </div>
  )
}

export default App
