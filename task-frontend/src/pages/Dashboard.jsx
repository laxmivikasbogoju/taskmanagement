import React, { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      toast.error("Error loading tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!sessionStorage.getItem("user")) {
      navigate("/");
    }
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      toast.success("Task deleted");
      fetchTasks();
    } catch {
      toast.error("Delete failed");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
  <div className="dashboard-container">
    <div className="dashboard-header">
      <h2>Task Dashboard</h2>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>

    <div className="dashboard-card">
      <TaskForm refresh={fetchTasks} />
    </div>

    <div className="dashboard-card">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TaskList tasks={tasks} onDelete={handleDelete} />
      )}
    </div>
  </div>
);
}

export default Dashboard;
