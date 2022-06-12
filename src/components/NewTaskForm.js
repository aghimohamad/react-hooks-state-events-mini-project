import React from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [task, setTask] = React.useState({
    text: "",
    category: "Code",
  });
 

  return (
    <form className="new-task-form" onSubmit={(e) => {
      e.preventDefault();
      onTaskFormSubmit(task);
     }}>
      <label>
        Details
        <input type="text" name="text" value={task.text} onChange={(e) => setTask({...task, text : e.target.value})} />
      </label>
      <label>
        Category
        <select name="category" value={task.category} onChange={(e) => setTask({...task, category : e.target.value})}>
          {categories.slice(1).map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task"  />
    </form>
  );
}

export default NewTaskForm;
