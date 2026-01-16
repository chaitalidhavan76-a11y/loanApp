import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // dummy auth
        localStorage.setItem("adminAuth", "true");

        navigate("/admin/dashboard", { replace: true });
    };

    return (
        <div className="auth-page">
            <form className="auth-card" onSubmit={handleLogin}>
                <h2>Admin Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>
                <p onClick={() => navigate("/admin/register")}>
                    Don’t have an account? <span>Register</span>
                </p>

            </form>
        </div>
    );
};

export default AdminLogin;
