import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Settings({ theme, setTheme }) {
  const [email, setEmail] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


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
          <label>Email Address</label>
          <input
            type="email"
            className="settings-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="settings-save-btn">
          Save Changes
        </button>
      </div>

      
      <div className="settings-box">
        <h3 className="settings-title">Change Password</h3>

        <div className="settings-group">
          <label>Current Password</label>
          <input
            type="password"
            className="settings-input"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>

        <div className="settings-group">
          <label>New Password</label>
          <input
            type="password"
            className="settings-input"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className="settings-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            className="settings-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="settings-save-btn">
          Update Password
        </button>
      </div>
    </div>
  );
}
