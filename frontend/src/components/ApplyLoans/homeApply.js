import React, { useState, useEffect } from "react";
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

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Check token validity on component mount
  useEffect(() => {
    const checkTokenValidity = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        setError("Please login first to submit application");
        setTimeout(() => navigate('/'), 2000);
        return;
      }

      // Check if token is expired
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const isExpired = payload.exp * 1000 < Date.now();
        
        if (isExpired) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
          setError("Your session has expired. Please login again.");
          setTimeout(() => navigate('/'), 2000);
        }
      } catch (err) {
        console.error("Invalid token format:", err);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setError("Invalid session. Please login again.");
        setTimeout(() => navigate('/'), 2000);
      }
    };

    checkTokenValidity();
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
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
      setTimeout(() => navigate('/'), 2000);
      return;
    }

    // Double-check token expiration before submission
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const isExpired = payload.exp * 1000 < Date.now();
      
      if (isExpired) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        setError("Your session has expired. Please login again.");
        setLoading(false);
        setTimeout(() => navigate('/'), 2000);
        return;
      }
    } catch (err) {
      setError("Invalid session. Please login again.");
      setLoading(false);
      setTimeout(() => navigate('/'), 2000);
      return;
    }

    try {
      // Match the exact fields from your schema
      const applicationData = {
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        address: form.address,
        employmentStatus: form.employmentStatus,
        annualIncome: parseFloat(form.annualIncome) || 0,
        loanAmount: parseFloat(form.loanAmount) || 0,
        loanTenure: parseInt(form.loanTenure) || 5,
      };

      console.log('Submitting home loan application:', applicationData);

      // Use the correct route: /api/applications/create
      const response = await fetch(`${API_URL}/applications/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        credentials: 'include',
        body: JSON.stringify(applicationData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        console.error("Backend error response:", data);
        
        // Handle JWT expiration
        if (response.status === 401 || data.message?.includes('expired') || data.message?.includes('jwt')) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
          setError("Your session has expired. Please login again.");
          setTimeout(() => navigate('/'), 2000);
          return;
        }
        
        throw new Error(data.message || data.error || 'Failed to submit application');
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

  // Check if user is logged in
  const token = localStorage.getItem('token');
  if (!token) {
    return (
      <div className="loan-application-container">
        <h1 className="loan-title">Home Loan Application</h1>
        <p className="loan-subtitle" style={{ color: 'red' }}>
          Please login first to submit application. Redirecting...
        </p>
      </div>
    );
  }

  return (
    <div className="loan-application-container">
      <h1 className="loan-title">Home Loan Application</h1>
      <p className="loan-subtitle">Enter your details to apply for a home loan</p>

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
          <label>Address *</label>
          <textarea
            name="address"
            className="form-control"
            placeholder="Enter your complete address"
            value={form.address}
            onChange={handleChange}
            required
            rows="3"
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
          <label>Loan Tenure (Years) *</label>
          <select
            name="loanTenure"
            className="form-control"
            value={form.loanTenure}
            onChange={handleChange}
            required
            disabled={loading}
          >
            <option value="">Select</option>
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