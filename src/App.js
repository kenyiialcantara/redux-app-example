import "./App.css";
import { useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TaskLIst from "./components/TaskLIst";

function App() {
  const taskState = useSelector((state) => state.tasks);
  console.log(taskState);
  return (
    <div className="App">
      <h1>Hello world</h1>
      <TaskForm />
      <TaskLIst />
    </div>
  );
}

export default App;
