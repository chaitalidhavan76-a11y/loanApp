import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckCreditScore = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    pan: "",
    mobile: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const checkScore = () => {
    const { pan, mobile, consent } = form;

    if (!pan || pan.length !== 10) {
      alert("Please enter a valid PAN number");
      return;
    }

    if (!mobile || mobile.length !== 10) {
      alert("Please enter a valid mobile number");
      return;
    }

    if (!consent) {
      alert("Please provide consent to proceed");
      return;
    }

    // Mock credit score (Paisabazaar style)
    const score = Math.floor(Math.random() * (880 - 650 + 1)) + 650;

    navigate("/credit-result", { state: { score } });
  };

  return (
    <div className="credit-page">
      <div className="header-section">
        <h1 className="credit-title">Check Your Credit Score for FREE</h1>
        <p className="credit-subtitle">
          Get your latest credit score instantly · No impact on your score
        </p>
      </div>

      <div className="score-card">
        <div className="field-group">
          <label>PAN Number</label>
          <input
            type="text"
            name="pan"
            placeholder="ABCDE1234F"
            maxLength={10}
            value={form.pan}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label>Mobile Number (linked to PAN)</label>
          <input
            type="tel"
            name="mobile"
            placeholder="Enter 10-digit mobile number"
            maxLength={10}
            value={form.mobile}
            onChange={handleChange}
          />
        </div>

        <div className="consent-box">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
          />
          <p>
            I authorize LoanHub to fetch my credit score from credit bureaus.
            This is a <strong>soft enquiry</strong> and will not affect my score.
          </p>
        </div>

        <button className="calculate-btn" onClick={checkScore}>
          Check Credit Score
        </button>

        <p className="safe-text">
          🔒 100% Secure · No spam · RBI compliant
        </p>
      </div>

      <div className="credit-info">
        <h2>Why Check Your Credit Score?</h2>

        <ul className="benefits-list">
          <li>✔ Know your loan eligibility instantly</li>
          <li>✔ Get lower interest rates</li>
          <li>✔ Access pre-approved loan offers</li>
          <li>✔ Improve chances of loan approval</li>
        </ul>

        <p className="note">
          Your credit score ranges between <strong>300 – 900</strong>. A score
          above <strong>750</strong> is considered excellent.
        </p>
      </div>
    </div>
  );
};

export default CheckCreditScore;
