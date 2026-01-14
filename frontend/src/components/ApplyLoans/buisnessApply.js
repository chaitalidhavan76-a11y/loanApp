import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = 'http://localhost:5000/api';

const BusinessLoanApplication = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    annualTurnover: "",
    loanAmount: "",
    businessType: "",
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

    // Check if the user is logged in
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
      // Match your backend schema field names exactly
      const applicationData = {
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        businessName: form.businessName,  // Use lowercase to match controller
        businessType: form.businessType,  // Use lowercase to match controller
        annualTurnover: parseFloat(form.annualTurnover) || 0,
        loanAmountRequired: parseFloat(form.loanAmount) || 0,
      };

      console.log('Application data being sent:', applicationData);

      const response = await fetch(`${API_URL}/applications/bussiness`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        credentials: 'include',
        body: JSON.stringify(applicationData)
      });

      const data = await response.json();

      if (!response.ok) {
        console.log("Backend error response:", data);
        
        // Handle JWT expiration from backend
        if (response.status === 401 || data.message?.includes('expired') || data.message?.includes('jwt')) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
          setError("Your session has expired. Please login again.");
          setTimeout(() => navigate('/'), 2000);
          return;
        }
        
        throw new Error(data.message || 'Failed to submit application');
      }

      console.log("Application submitted successfully:", data);
      setSuccess(true);
      alert("🎉 Your Business loan application has been submitted successfully!");

      // Reset form
      setForm({
        fullName: "",
        email: "",
        phone: "",
        businessName: "",
        annualTurnover: "",
        loanAmount: "",
        businessType: "",
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
      <h1 className="loan-title">Business Loan Application</h1>
      <p className="loan-subtitle">Enter details to apply for a business loan</p>

      {error && (
        <div className="error-message" style={{ 
          color: 'white', 
          backgroundColor: '#dc3545', 
          padding: '12px', 
          borderRadius: '4px',
          marginBottom: '15px' 
        }}>
          {error}
        </div>
      )}
      
      {success && (
        <div className="success-message" style={{ 
          color: 'white', 
          backgroundColor: '#28a745', 
          padding: '12px', 
          borderRadius: '4px',
          marginBottom: '15px' 
        }}>
          Application submitted successfully!
        </div>
      )}

      <form className="loan-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input name="fullName" placeholder="Enter full name"
            value={form.fullName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="example@mail.com"
            value={form.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter mobile number"
            value={form.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Business Name</label>
          <input name="businessName" placeholder="Your business name"
            value={form.businessName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Business Type</label>
          <select name="businessType" value={form.businessType}
            onChange={handleChange} required>
            <option value="">Select</option>
            <option value="sole">Sole Proprietorship</option>
            <option value="partnership">Partnership</option>
            <option value="pvt">Private Limited</option>
            <option value="public">Public Limited</option>
          </select>
        </div>

        <div className="form-group">
          <label>Annual Turnover (₹)</label>
          <input type="number" name="annualTurnover" placeholder="0"
            value={form.annualTurnover} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Loan Amount Required (₹)</label>
          <input type="number" name="loanAmount" placeholder="0"
            value={form.loanAmount} onChange={handleChange} required />
        </div>

        <button className="submit-btn" type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
};

export default BusinessLoanApplication;
