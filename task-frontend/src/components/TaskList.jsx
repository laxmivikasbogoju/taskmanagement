import React from "react";

function TaskList({ tasks, onDelete }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Due Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.status}</td>
            <td>{task.dueDate?.split("T")[0]}</td>
            <td>
              <button onClick={() => onDelete(task.id)}>
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
