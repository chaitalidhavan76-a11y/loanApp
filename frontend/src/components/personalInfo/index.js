import React from "react";
import { Link } from "react-router-dom";

const PersonalInfo = () => {
  return (
    <div className="loan-page">

      <div className="stepper">
        <div className="step">1</div>
        <div className="line"></div>
        <div className="step active">2</div>
        <div className="line"></div>
        <div className="step">3</div>
      </div>

      <div className="step-labels">
        <span>Loan Details</span>
        <span className="active-label">Personal Info</span>
        <span>Financial Info</span>
      </div>

    
      <div className="loan-card">
        <h2>Personal Information</h2>
        <p className="subtitle">Help us know you better</p>

        <div className="form-grid">

          <div className="form-group">
            <label>First Name</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input type="text"/>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" />
          </div>

            <div className="form-group">
            <label>PAN Card Number</label>
            <input
              type="text"
              maxLength="10"
            />
          </div>

          <div className="form-group full-width">
            <label>Address</label>
            <input type="text" />
          </div>

        </div>

        <div className="actions">
          <Link to='/loan'>
            <button className="prev-btn">Previous</button>
          </Link>

          <Link to='/financialInfo'>
          <button className="next-btn">Next</button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PersonalInfo;