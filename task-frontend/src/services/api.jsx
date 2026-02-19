const API_BASE_URL = "http://localhost:5247/api"; // adjust to your port

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/Users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    throw new Error("Invalid credentials")
  }

  return response.json();
};

export const getTasks = async () => {
  const response = await fetch(`${API_BASE_URL}/Tasks`);
  if (!response.ok) throw new Error("Failed to fetch tasks");
  return response.json();
};

export const createTask = async (task) => {
  const response = await fetch(`${API_BASE_URL}/Tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });

  if (!response.ok) throw new Error("Failed to create task");
  return response.json();
};

export const updateTask = async (id, task) => {
  const response = await fetch(`${API_BASE_URL}/Tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });

  if (!response.ok) throw new Error("Failed to update task");
  return response.json();
};
export const registerUser = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Registration failed");
  }

  return response.json();
};

export const deleteTask = async (id) => {
  const response = await fetch(`${API_BASE_URL}/Tasks/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) throw new Error("Failed to delete task");
};
