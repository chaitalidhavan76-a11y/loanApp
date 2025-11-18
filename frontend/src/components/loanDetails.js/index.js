import React from "react";
import { Link } from "react-router-dom";


const LoanDetails = () => {
    return (
        <div className="loan-page">
            <div className="stepper">
                <div className="step active">1</div>
                <div className="line active"></div>
                <div className="step">2</div>
                <div className="line"></div>
                <div className="step">3</div>
            </div>

            <div className="step-labels">
                <span className="active-label">Loan Details</span>
                <span>Personal Info</span>
                <span>Financial Info</span>
            </div>

        
            <div className="loan-card">
                <h2>Loan Details</h2>
                <p className="subtitle">Tell us about your loan requirements</p>

                <div className="form-grid">

            
                    <div className="form-group">
                        <label>Loan Type</label>
                        <select defaultValue="">
                            <option value="" disabled hidden>Select loan type</option>
                            <option value="personal">Personal Loan</option>
                            <option value="business">Business Loan</option>
                            <option value="home">Home Loan</option>
                            <option value="car">Car Loan</option>
                            <option value="education">Education Loan</option>
                        </select>
                    </div>

    
                    <div className="form-group">
                        <label>Loan Amount</label>
                        <input type="text" placeholder="e.g., ₹50,000" />
                    </div>

                    
                    <div className="form-group">
                        <label>Loan Duration</label>
                        <select defaultValue="">
                            <option value="" disabled hidden>Select duration</option>
                            <option>12 months</option>
                            <option>24 months</option>
                            <option>36 months</option>
                            <option>48 months</option>
                            <option>60 months</option>
                            <option>120 months (10 years)</option>
                            <option>180 months (15 years)</option>
                            <option>240 months (20 years)</option>
                            <option>360 months (30 years)</option>
                        </select>
                    </div>

        
                    <div className="form-group">
                        <label>Purpose of Loan</label>
                        <select defaultValue="">
                            <option value="" disabled hidden>Select purpose</option>
                            <option>Debt Consolidation</option>
                            <option>Home Improvement</option>
                            <option>Business Expansion</option>
                            <option>Education</option>
                            <option>Medical Expenses</option>
                            <option>Wedding</option>
                            <option>Vacation</option>
                            <option>Other</option>
                        </select>
                    </div>

                </div>

                
                <div className="actions">
                    <Link to="/personalInfo">
                        <button className="next-btn">Next</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default LoanDetails;