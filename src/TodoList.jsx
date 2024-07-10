import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Exercise",
    "Take a shower",
    "Eat breakfast",
    "Start work",
    "Make Dinner",
    "Read a book",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputchange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setNewTask(updatedTasks);
  }

  function moveTaskUp(index) {
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if(index < tasks.length -1){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <div className="to-do-list w-full flex items-center justify-center border ">
        <h1 className="text-[#012355] mb-8">TO-Do-List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputchange}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task} </span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/0402/9851/2547/files/delete.png?v=1720371699"
                  width="40"
                  height="40"
                  alt="delete-icon"
                />
              </button>
              <button
                className="move-up-button"
                onClick={() => moveTaskUp(index)}
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/0402/9851/2547/files/up-arrow_1.png?v=1720372355"
                  width="40"
                  height="40"
                  alt="up-arrow-icon"
                />
              </button>
              <button
                className="move-down-button"
                onClick={() => moveTaskDown(index)}
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/0402/9851/2547/files/down-arrow_3.png?v=1720372347"
                  width="40"
                  height="40"
                  alt="donw-arrow-icon"
                />
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
