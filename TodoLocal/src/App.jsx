import { useState, useEffect } from "react";
import { TodoProvider } from "./context";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskItems from "./components/TaskItems";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, { id: Date.now(), ...task }]);
  };
  const editTask = (id, task) => {
    setTasks((prev) =>
      prev.map((prevTask) => (prevTask.id === id ? task : prevTask))
    );
  };
  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((prevTask) =>
        prevTask.id === id
          ? { ...prevTask, Completed: !prevTask.Completed }
          : prevTask
      )
    );
  };

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    if (tasks && tasks.length > 0) {
      setTasks(tasks);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TodoProvider
      value={{ addTask, editTask, removeTask, toggleComplete, tasks }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TaskForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {tasks.map((item) => (
              <div key={item.id} className="w-full">
                <TaskItems tasks={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
