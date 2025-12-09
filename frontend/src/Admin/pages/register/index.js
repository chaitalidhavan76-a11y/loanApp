import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("adminEmail", email);
      localStorage.setItem("adminPassword", password);
      alert("Admin Registered Successfully");
      navigate("/admin-login");
    } else {
      alert("Please enter all fields");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleRegister}>
        <h2 className="auth-title">Admin Registration</h2>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="auth-btn">Register</button>

        <p className="auth-text">
          Already have an account? <Link to="/admin-login">Login</Link>
        </p>
      </form>
    </div>
  );
}
