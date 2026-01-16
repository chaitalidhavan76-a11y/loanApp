import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function LenderLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("lenderToken", "dummyAdminAuth");
      navigate("/lender"); 
      try {
        const response = await axios.post("http://localhost:5000/api/admin/admin-login", { email, password });
        localStorage.setItem("lenderToken", response.data.token);
        alert("lender Logged in successfully");
        navigate("/lender/*");
      } catch (error) {
        console.error("Login failed:", error);
        alert("Invalid email or password");
        navigate("/lender-login");
        return;
      }
    } else {
      alert("Please enter email & password");
      navigate("/lender-login");
      return;
    }
    navigate("/lender"); 
    return;
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleLogin}>
        <h2 className="auth-title">Lenders Login</h2>

        <input
          type="email"
          placeholder="Lenders Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type={show ? 'text': 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={{ marginLeft: '270px', border: 'none', marginTop: '-80px' }} onClick={() => setShow(!show)}>{show? 'Hide': 'Show'}</button>

        <button type="submit" className="auth-btn">Login</button>

        <p className="auth-text">
          New Admin? <Link to="/lender-register">Register</Link>
        </p>
        {/* <p className="auth-text">
          New Admin? <Link to="/admin-register">Register</Link>
        </p> */}
      </form>
    </div>
  );
}
