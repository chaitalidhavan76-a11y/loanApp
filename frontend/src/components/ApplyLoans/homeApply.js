import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = 'http://localhost:5000/api';

const HomeLoanApplication = () => {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    employmentStatus: "",
    annualIncome: "",
    loanAmount: "",
    loanTenure: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      setError("Please login first to submit application");
      setLoading(false);
      setTimeout(() => navigate('/admin-login'), 2000);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/applications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...form,
          loanType: 'home',
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit application');
      }
      
      console.log("✅ Success:", data);
      setSuccess(true);
      alert("🎉 Your home loan application has been submitted successfully!");

      // Reset form
      setForm({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        employmentStatus: "",
        annualIncome: "",
        loanAmount: "",
        loanTenure: "",
      });

    } catch (err) {
      console.error("❌ Error:", err);
      setError(err.message || "Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loan-application-container">
      <h1 className="loan-title">Home Loan Application</h1>
      <p className="loan-subtitle">
        Fill in your details to proceed with your home loan request
      </p>

      {/* Error Message */}
      {error && (
        <div className="alert alert-danger" role="alert" style={{
          padding: '12px',
          marginBottom: '20px',
          backgroundColor: '#f8d7da',
          color: '#721c24',
          border: '1px solid #f5c6cb',
          borderRadius: '4px'
        }}>
          ⚠️ {error}
        </div>          
      )}

      {/* Success Message */}
      {success && (
        <div className="alert alert-success" role="alert" style={{
          padding: '12px',
          marginBottom: '20px',
          backgroundColor: '#d4edda',
          color: '#155724',
          border: '1px solid #c3e6cb',
          borderRadius: '4px'
        }}>
          ✅ Application submitted successfully! We'll review it shortly.
        </div>
      )}

      <form className="loan-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            placeholder="Enter your full name"
            value={form.fullName}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="example@mail.com"
            value={form.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Enter 10-digit mobile number"
            value={form.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            title="Please enter 10 digit phone number"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Residential Address *</label>
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Enter your address"
            value={form.address}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Employment Status *</label>
          <select
            name="employmentStatus"
            className="form-control"
            value={form.employmentStatus}
            onChange={handleChange}
            required
            disabled={loading}
          >
            <option value="">Select</option>
            <option value="salaried">Salaried</option>
            <option value="self-employed">Self-employed</option>
            <option value="business">Business</option>
            <option value="retired">Retired</option>
          </select>
        </div>

        <div className="form-group">
          <label>Annual Income (₹) *</label>
          <input
            type="number"
            name="annualIncome"
            className="form-control"
            placeholder="0"
            value={form.annualIncome}
            onChange={handleChange}
            required
            min="0"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Loan Amount Required (₹) *</label>
          <input
            type="number"
            name="loanAmount"
            className="form-control"
            placeholder="0"
            value={form.loanAmount}
            onChange={handleChange}
            required
            min="1000"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Preferred Loan Tenure *</label>
          <select
            name="loanTenure"
            className="form-control"
            value={form.loanTenure}
            onChange={handleChange}
            required
            disabled={loading}
          >
            <option value="">Select tenure</option>
            <option value="5">5 Years</option>
            <option value="10">10 Years</option>
            <option value="15">15 Years</option>
            <option value="20">20 Years</option>
            <option value="25">25 Years</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={loading}
          style={{
            opacity: loading ? 0.6 : 1,
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? (
            <>
              <span style={{ marginRight: '8px' }}>⏳</span>
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </button>
      </form>
    </div>
  );
};

export default HomeLoanApplication;








































































































