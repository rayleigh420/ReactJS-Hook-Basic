import './App.css';
import ListTodo from './components/listTodo/ListTodo';
import Task from './components/popup/Task';
import TaskAntd from './components/TaskAntd/TaskAntd'
import AvatarP from './components/avatar/AvatarP'
import CreateTask from './components/TaskAntd/CreateTask'

function App() {
  return (
    <div className="App">
      {/* <h2>ListTodo with React-hook</h2>
      <ListTodo /> */}
      {/* <Task /> */}
      <TaskAntd />
      {/* <AvatarP /> */}
      <CreateTask />
    </div>
  );
}

export default App;
