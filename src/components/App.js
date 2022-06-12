import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const handleDelete = (i) => {
    setTasks(tasks.filter((_,index) => index !== i));
  }

  function handleClick( category) {
    setCategory(category);
  }

  function handleSubmit(task) {
    setTasks([...tasks, task]);
  }


  const tasksDisplay = tasks.filter((task) => { 
    if( category === "All" ) {
            return true;
          }
          else {
            return task.category === category;
          }
        });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoryA={category} categories={CATEGORIES} handleClick={handleClick} />
      <NewTaskForm onTaskFormSubmit={handleSubmit} categories={CATEGORIES} />
      <TaskList handleDelete={handleDelete} tasks={tasksDisplay} categories={CATEGORIES} />
    </div>
  );
}

export default App;
