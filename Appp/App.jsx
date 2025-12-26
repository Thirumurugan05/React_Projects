import React, { useState } from "react";
import Taskform from "./Project01/components/Taskform";
import TaskList from "./Project01/components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text: text, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((e) => e.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id == id ? { ...task, completed: !task.completed } : task;
      })
    );
  };

const ubdateTask = (id) => {
  if (editText.trim() === "") return;

  setTasks(
    tasks.map(task =>
      task.id === id
        ? { ...task, text: editText }
        : task
    )
  );

  setEditId(null);
  setEditText("");
};


  return (
    <>
      <div className="app-container">
        <h2>Task Manager</h2>
      <Taskform addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editId={editId}
        setEditId={setEditId}
        editText={editText}
        setEditText={setEditText}
        ubdateTask={ubdateTask}
      />
      </div>
    </>
  );
};

export default App;
