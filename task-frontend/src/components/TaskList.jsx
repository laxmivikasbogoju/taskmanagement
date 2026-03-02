import React from "react";

function TaskList({ tasks, onDelete }) {
  return (
    <table>
    
  <thead>
    <tr className="heading">
      <th>Title</th>
      <th>Status</th>
      <th>Due Date</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
    {tasks.map((task) => (
      <tr key={task.id}>
        <td>{task.title}</td>

        <td>
          <span
            className={`status ${
              task.status === "Completed"
                ? "status-completed"
                : "status-pending"
            }`}
          >
            {task.status}
          </span>
        </td>

        <td>{task.dueDate?.split("T")[0]}</td>

        <td>
          <button
            className="btn-danger"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
  );
}

export default TaskList;
