import React from "react";

const SignupModal = ({ onClose, onSwitch }) => {
  return (
    <div className="myOverlay" onClick={onClose}>
      <div className="myModal" onClick={(e) => e.stopPropagation()}>

        <button className="myClose" onClick={onClose}>✕</button>

        <h2 className="myTitle">Create an Account</h2>
        <p className="mySubtitle">
          Join us today to sell your gold or apply for gold loans easily.
        </p>

        <form className="myForm">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />

          <label>Email</label>
          <input type="email" placeholder="your@email.com" />

          <label>Password</label>
          <input type="password" placeholder="Create a strong password" />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" />

          <div className="myCheckbox">
            <input type="checkbox" />
            I agree to the Terms & Conditions and Privacy Policy.
          </div>

          <button type="submit" className="myButton">Create Account</button>
        </form>

        <p className="mySwitch">
          Already have an account? <span onClick={onSwitch}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
