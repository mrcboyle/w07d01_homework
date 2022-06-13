import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { name: "Mow Lawn", priority: "Low" },
    { name: "Assemble Wardrobe", priority: "High" },
    { name: "Paint Bedroom", priority: "Low" }
  ]);

  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState("High");

  const taskNodes = tasks.map((task, index) => {
    return (
      <li key={index} className="low-priority"><span>{task.name}</span><span>{task.priority}</span>
      </li>
    )
  });

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  };

  const handlePriorityInput = (event) => {
    setNewPriority(event.target.value)
  };

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    console.log(newPriority);
    copyTasks.push({ name: newTask, priority: newPriority });
    setTasks(copyTasks);
    setNewTask("");
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <hr></hr>

      <form onSubmit={saveNewTask}>
        <label htmlFor="new-task"></label>
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput} />

        <label htmlFor="high">High</label>
        <input id="high" type="radio" name="priority" value="High" onChange={handlePriorityInput} checked="checked" />

        <label htmlFor="low">Low</label>
        <input id="low" type="radio" name="priority" value="Low" onChange={handlePriorityInput} />

        <input type="submit" value="Save Task" />

      </form>

      <ul>
        {taskNodes}
      </ul>

    </div >
  );
}

export default App;
