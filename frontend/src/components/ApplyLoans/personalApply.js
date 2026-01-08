import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
const API_URL = 'http://localhost:5000/api';

=======
const API_URL = "http://localhost:5000/api/user";
>>>>>>> bbdc4f96cca4a6dc5e660450c874ce278feb2d62

const PersonalLoanApplication = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
<<<<<<< HEAD
    employmentStatus: "",
=======
    employmentStatus: "", // ✅ FIXED
>>>>>>> bbdc4f96cca4a6dc5e660450c874ce278feb2d62
    monthlyIncome: "",
    loanAmount: "",
    purposeOfLoan: "", // ✅ FIXED
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

<<<<<<< HEAD

  const handleChange = (e) =>{
    setForm({ ...form, [e.target.name]: e.target.value });
  setError(null);
  }
=======
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

>>>>>>> bbdc4f96cca4a6dc5e660450c874ce278feb2d62
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
<<<<<<< HEAD
    setSuccess(false);
   

    //check if user is logged in
    const token = localStorage.getItem('token');
    if(!token){
      setError("please login first to submit application");
      setLoading(false);
      setTimeout(() => navigate('/admin-login'), 2000);
      return;
    }
    try{
      const response = await fetch(`${API_URL}/applications`,{
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...form,
          loanType: 'personal',
          address: form.address || 'N/A',
          annualIncome: form.monthlyIncome ? (parseInt(form.monthlyIncome) * 12).toString() : '0',
          loanTenure: '5',
        }),
      });

      const data = await response.json();
       
      if(!response.ok){
        console.log("Backend error response:" , data);
        throw new Error(data.message || data.error || 'Failed to submit application');
      }
       console.log("✅ Success:", data);
      setSuccess(true);
      alert("🎉 Your personal loan application has been submitted successfully!");

      // Reset form
      setForm({
    fullName: "",
    phone: "",
    email: "",
    employmentStatus: "",
    monthlyIncome: "",
    loanAmount: "",
    purpose: "",
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


=======

    const token = localStorage.getItem("token");

    if (!token) {
      setError("Please login first");
      setLoading(false);
      setTimeout(() => navigate("/login"), 1500);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/personal-loan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...form,
          monthlyIncome: Number(form.monthlyIncome),
          loanAmount: Number(form.loanAmount),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Submission failed");
      }

      setSuccess(true);
      alert("Personal loan application submitted successfully");
      console.log(data);

      setForm({
        fullName: "",
        phone: "",
        email: "",
        employmentStatus: "",
        monthlyIncome: "",
        loanAmount: "",
        purposeOfLoan: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
>>>>>>> bbdc4f96cca4a6dc5e660450c874ce278feb2d62
  };

  return (
    <div className="loan-application-container">
      <h1 className="loan-title">Personal Loan Application</h1>
      <p className="loan-subtitle">Fill in your information to proceed</p>
        
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


      {error && <p className="error-text">{error}</p>}
      {success && <p className="success-text">Application submitted</p>}

      <form className="loan-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Employment status</label>
          <select
            name="employmentStatus"
            value={form.employmentStatus}
            onChange={handleChange}
            required
            disabled={loading}
          >
            <option value="">Select</option>
            <option value="salaried">Salaried</option>
            <option value="self-employed">Self-Employed</option>
          </select>
        </div>

        <div className="form-group">
          <label>Monthly Income (₹)</label>
          <input
            name="monthlyIncome"
            type="number"
            value={form.monthlyIncome}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Loan Amount Required (₹)</label>
          <input
            name="loanAmount"
            type="number"
            value={form.loanAmount}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Purpose of Loan</label>
          <input
            name="purposeOfLoan"
            value={form.purposeOfLoan}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

       <button type="submit" className="submit-btn" disabled={loading}>
  {loading ? "Submitting..." : "Submit Application"}
</button>
      </form>
    </div>
  );
};

export default PersonalLoanApplication;
