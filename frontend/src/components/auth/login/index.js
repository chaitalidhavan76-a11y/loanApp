import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { FiEye, FiEyeOff } from "react-icons/fi";

const LoginModal = ({ onClose, onSwitch }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login successful!");
      onClose();
      window.location.reload();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="myOverlay" onClick={onClose}>
      <div className="myModal" onClick={(e) => e.stopPropagation()}>
        <button className="myClose" onClick={onClose}>
          <RxCross2 />
        </button>

        <h2 className="loginTitle">Login to your account</h2>

        <button className="googleBtn">
          <FcGoogle />
          <span>Continue with Google</span>
        </button>

        <div className="divider">
          <span>or login with email</span>
        </div>

        {error && (
          <div
            className="error-message"
            style={{ color: "red", marginBottom: "10px" }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="myForm">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password *</label>
          <input
            type="password"
            name="password"
            placeholder="Create a strong password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button className="loginBtn" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p
          className="switchText"
          style={{ marginTop: "15px", textAlign: "center" }}
        >
          Don&apos;t have an account?{" "}
          <span
            onClick={onSwitch}
            style={{ color: "#007bff", cursor: "pointer" }}
          >
            Sign up
          </span>
        </p>

        <p className="terms">
          By continuing, you agree to our{" "}
          <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
