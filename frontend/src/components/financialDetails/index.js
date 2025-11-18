import React from "react";
import { Link } from "react-router-dom";

const FinancialInfo = () => {
  return (
    <div className="loan-page">

   
      <div className="stepper">
        <div className="step">1</div>
        <div className="line"></div>
        <div className="step">2</div>
        <div className="line"></div>
        <div className="step active">3</div>
      </div>

      <div className="step-labels">
        <span>Loan Details</span>
        <span>Personal Info</span>
        <span className="active-label">Financial Info</span>
      </div>


      <div className="loan-card">
        <h2>Financial Information</h2>
        <p className="subtitle">Help us find the best rates for you</p>

        <div className="form-grid">

          
          <div className="form-group">
            <label>Employment Status</label>
            <select defaultValue="">
              <option value="" disabled hidden>Select employment status</option>
              <option>Employed</option>
              <option>Self-Employed</option>
              <option>Student</option>
              <option>Unemployed</option>
              <option>Retired</option>
            </select>
          </div>

 
          <div className="form-group">
            <label>Annual Income</label>
            <input type="text" placeholder="e.g., ₹7,50,000" />
          </div>

          <div className="form-group full-width">
            <label>Credit Score Range</label>
            <select defaultValue="">
              <option value="" disabled hidden>Select credit score range</option>
              <option>300 - 579 (Poor)</option>
              <option>580 - 669 (Fair)</option>
              <option>670 - 739 (Good)</option>
              <option>740 - 799 (Very Good)</option>
              <option>800 - 850 (Excellent)</option>
            </select>
          </div>
        </div>


        <div className="info-box">
          <h4>Your Information is Secure</h4>
          <p>We use bank-level encryption to protect your data. Checking rates will not impact your credit score.</p>
        </div>

        <div className="actions">
          <Link to="/personalInfo">
            <button className="prev-btn">Previous</button>
          </Link>

          <button className="next-btn">View Results</button>
        </div>

      </div>
    </div>
  );
};

export default FinancialInfo;
