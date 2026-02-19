import React, { useState } from "react";
import { createTask } from "../../../task-frontend/src/services/api";
import { toast } from "react-toastify";

function TaskForm({ refresh }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
    dueDate: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createTask(task);
      toast.success("Task added!");
      refresh();
    } catch {
      toast.error("Error creating task");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title"
        onChange={(e) => setTask({ ...task, title: e.target.value })} />

      <input placeholder="Description"
        onChange={(e) => setTask({ ...task, description: e.target.value })} />

      <input type="date"
        onChange={(e) => setTask({ ...task, dueDate: e.target.value })} />

      <select
        onChange={(e) => setTask({ ...task, status: e.target.value })}>
        <option>Pending</option>
        <option>Completed</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
