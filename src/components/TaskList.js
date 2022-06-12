import React from "react";
import Task from "./Task";


function TaskList({ tasks, handleDelete }) {
  


  return (
    <div className="tasks">
      {tasks.map((task, index) => ( 
        
        <Task handleDelete={handleDelete} index={index} key={index} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
