import React, { useState } from "react";
import { loginUser } from "../services/api";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required")
});

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await schema.validate(form);
      const user = await loginUser(form.email, form.password);

      sessionStorage.setItem("user", JSON.stringify(user));
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
  <div className="auth-wrapper">
    <div className="auth-card">
      <h2>Welcome Back</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            placeholder=" "
            required
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          <label>Email</label>
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder=" "
            required
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
          <label>Password</label>
        </div>

        <button className="btn btn-login" type="submit">
          Login
        </button>
      </form>

      <div
        className="auth-link"
        onClick={() => navigate("/register")}
      >
        Don’t have an account? Register
      </div>
    </div>
  </div>
);
}

export default Login;
