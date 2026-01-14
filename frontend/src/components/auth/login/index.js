import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ onClose, onSwitch }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

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

      // Store token and user data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      
      // Also set token in cookie for consistency
      document.cookie = `token=${data.token}; path=/; max-age=${7 * 24 * 60 * 60}`; // 7 days

      alert("Login successful!");
      onClose();
      
      // Navigate to dashboard or home instead of reload
      navigate('/dashboard');
      // Alternatively, if you need to reload:
      // window.location.href = '/dashboard';
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="myOverlay" onClick={onClose}>
      <div className="myModal" onClick={(e) => e.stopPropagation()}>
        <button className="myClose" onClick={onClose}>
          <RxCross2 />
        </button>

        <h2 className="loginTitle">Login to your account</h2>

        <button className="googleBtn" type="button">
          <FcGoogle />
          <span>Continue with Google</span>
        </button>

        <div className="divider">
          <span>or login with email</span>
        </div>

        {error && (
          <div
            className="error-message"
            style={{
              color: "white",
              backgroundColor: "#dc3545",
              padding: "10px",
              borderRadius: "4px",
              marginBottom: "15px",
              textAlign: "center",
            }}
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
            autoComplete="email"
          />

          <label>Password *</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
              style={{ paddingRight: "40px" }}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "5px",
                display: "flex",
                alignItems: "center",
              }}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

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
            style={{
              color: "#007bff",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Sign up
          </span>
        </p>

        <p
          className="switchText"
          style={{ marginTop: "10px", textAlign: "center" }}
        >
          <span
            onClick={() => {
              onClose();
              navigate("/admin-login");
            }}
            style={{
              color: "#007bff",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Admin Login
          </span>
        </p>

        <p className="terms" style={{ marginTop: "15px", textAlign: "center", fontSize: "12px" }}>
          By continuing, you agree to our <a href="/terms">Terms of Use</a> &{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginModal;