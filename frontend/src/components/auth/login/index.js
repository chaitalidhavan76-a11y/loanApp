import React from "react";


const LoginModal = ({ onClose, onSwitch }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Welcome Back</h2>
        <p>Login to your account to access your gold transactions and loans.</p>

        <form>
          <label>Email</label>
          <input type="email" placeholder="your@email.com" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <a href="#" className="forgot-link">Forgot password?</a>

          <button type="submit" className="action-btn">Login</button>
        </form>

        <p className="switch-text">
          Don’t have an account?
          <span className="switch-link" onClick={onSwitch}> Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
