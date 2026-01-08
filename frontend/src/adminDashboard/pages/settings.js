import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import axios from "axios";
import Header from "../components/header.js";

export default function Settings({ theme, setTheme }) {
  const [email, setEmail] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const fetchAdminEmail = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        if (!token) {
          console.error("Admin token missing");
          return;
        }

        const { data } = await axios.get(
          "http://localhost:5000/api/admin/admin-email",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setEmail(data.email);
        console.log("email", data.email);
      } catch (error) {
        console.error(
          "Error fetching admin email:",
          error.response?.data || error.message
        );
      }
    };

    fetchAdminEmail();
  }, []);

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        alert("Unauthorized. Please login again.");
        return;
      }

      const { data } = await axios.put(
        "http://localhost:5000/api/admin/change-password",
        {
          currentPassword,
          newPassword,
          confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(data.message || "Password updated successfully");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to update password");
    }
  };

  return (
    <div className="applications-page">
      <div className="settings-header">
        <h2 className="page-title">Settings</h2>

        <button
          className="theme-toggle-btn"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <FiMoon /> : <FiSun />}
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>

      <p className="page-subtitle">
        Manage your account and dashboard preferences.
      </p>

      <div className="settings-box">
        <h3 className="settings-title">Profile Information</h3>
        <div className="settings-group">
          <label>Admin Email Address</label>
          <input
            type="email"
            className="settings-input"
            value={email}
            disabled
          />
        </div>

        <button className="settings-save-btn">Save Changes</button>
      </div>

      <div className="settings-box">
        <h3 className="settings-title">Change Password</h3>

        <div className="settings-group">
          <label>Current Password</label>

          <input
            type={showCurrentPassword ? "text" : "password"}
            className="settings-input"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />

          <button
            type="button"
            className="password-toggle-btn"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
          >
            {showCurrentPassword ? "Hide Password" : "Show Password"}
          </button>
        </div>

        <div className="settings-group">
          <label>New Password</label>

          <input
            type={showNewPassword ? "text" : "password"}
            className="settings-input"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button
            type="button"
            className="password-toggle-btn"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? "Hide Password" : "Show Password"}
          </button>
        </div>

        <div className="settings-group">
          <label>Confirm New Password</label>

          <input
            type={showConfirmPassword ? "text" : "password"}
            className="settings-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            type="button"
            className="password-toggle-btn"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? "Hide Password" : "Show Password"}
          </button>
        </div>

        <button className="settings-save-btn" onClick={handleChangePassword}>
          Update Password
        </button>
      </div>
    </div>
  );
}
