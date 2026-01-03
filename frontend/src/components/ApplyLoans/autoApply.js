import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = 'http://localhost:5000/api';

const AutoLoanApplication = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    vehicleType: "",
    vehiclePrice: "",
    loanAmount: "",
    employmentStatus: "",
    monthlyIncome: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
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
      const response = await fetch(`${API_URL}/applications/auto`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }, 
        body: JSON.stringify({
          ...form,
          loanType: 'auto',
          // Add any fields that backend might require
          address: form.address || 'N/A',
          annualIncome: form.monthlyIncome ? (parseInt(form.monthlyIncome) * 12).toString() : '0',
          loanTenure: '5', // Default tenure for auto loans
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        console.error("Backend error response:", data);
        throw new Error(data.message || data.error || 'Failed to submit application');
      }
      
      console.log("✅ Success:", data);
      setSuccess(true);
      alert("🎉 Your auto loan application has been submitted successfully!");

      // Reset form
      setForm({
        fullName: "",
        email: "",
        phone: "",
        vehicleType: "",
        vehiclePrice: "",
        loanAmount: "",
        employmentStatus: "",
        monthlyIncome: "",
      });

    } catch (err) {
      console.error("❌ Error:", err);
      console.error("Error details:", {
        message: err.message,
        name: err.name,
        stack: err.stack
      });
      setError(err.message || "Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loan-application-container">
      <h1 className="loan-title">Auto Loan Application</h1>
      <p className="loan-subtitle">Enter your details to apply for an auto loan</p>

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
            placeholder="Enter full name"
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
          <label>Vehicle Type *</label>
          <select
            name="vehicleType"
            className="form-control"
            value={form.vehicleType}
            onChange={handleChange}
            required
            disabled={loading}
          >
            <option value="">Select</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="scooter">Scooter</option>
          </select>
        </div>

        <div className="form-group">
          <label>Vehicle Price (₹) *</label>
          <input
            type="number"
            name="vehiclePrice"
            className="form-control"
            placeholder="0"
            value={form.vehiclePrice}
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
            <option value="self-employed">Self-Employed</option>
            <option value="business">Business</option>
          </select>
        </div>

        <div className="form-group">
          <label>Monthly Income (₹) *</label>
          <input
            type="number"
            name="monthlyIncome"
            className="form-control"
            placeholder="0"
            value={form.monthlyIncome}
            onChange={handleChange}
            required
            min="0"
            disabled={loading}
          />
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

export default AutoLoanApplication;