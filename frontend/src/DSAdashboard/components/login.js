import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DsaLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = (e) => {
  e.preventDefault();

  // dummy auth
  localStorage.setItem("dsaAuth", "true");

  navigate("/dsa/dashboard", { replace: true });
};




  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleLogin}>
        <h2>DSA Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p onClick={() => navigate("/Dsa/register")}>
          Don’t have an account? <span>Register</span>
        </p>
      </form>
    </div>
  );
};

export default DsaLogin;
