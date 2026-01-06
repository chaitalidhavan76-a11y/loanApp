import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function LenderLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email && password) {
<<<<<<< HEAD:frontend/src/lendersDashboard/pages/login/index.js
      localStorage.setItem("lenderToken", "dummyAdminAuth");
      navigate("/lender"); 
=======
      try {
        const response = await axios.post("http://localhost:5000/api/admin/admin-login", { email, password });
        localStorage.setItem("adminToken", response.data.token);
        alert("Admin Logged in successfully");
        navigate("/admin/*");
      } catch (error) {
        console.error("Login failed:", error);
        alert("Invalid email or password");
        navigate("/admin-login");
        return;
      }
>>>>>>> 1fc6c0cb5701005443f59e04a0c7449cdd294dae:frontend/src/Admin/pages/login/index.js
    } else {
      alert("Please enter email & password");
      navigate("/admin-login");
      return;
    }
    navigate("/admin"); 
    return;
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleLogin}>
        <h2 className="auth-title">Admin Login</h2>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="auth-btn">Login</button>

<<<<<<< HEAD:frontend/src/lendersDashboard/pages/login/index.js
        <p className="auth-text">
          New Admin? <Link to="/lender-register">Register</Link>
        </p>
=======
        {/* <p className="auth-text">
          New Admin? <Link to="/admin-register">Register</Link>
        </p> */}
>>>>>>> 1fc6c0cb5701005443f59e04a0c7449cdd294dae:frontend/src/Admin/pages/login/index.js
      </form>
    </div>
  );
}
