import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/api/user";

const PersonalLoanApplication = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    employmentStatus: "", // ✅ FIXED
    monthlyIncome: "",
    loanAmount: "",
    purposeOfLoan: "", // ✅ FIXED
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

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
  };

  return (
    <div className="loan-application-container">
      <h1 className="loan-title">Personal Loan Application</h1>
      <p className="loan-subtitle">Fill in your information to proceed</p>

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
          />
        </div>

        <div className="form-group">
          <label>Employment Type</label>
          <select
            name="employmentStatus"
            value={form.employmentStatus}
            onChange={handleChange}
            required
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
          />
        </div>

        <div className="form-group">
          <label>Purpose of Loan</label>
          <input
            name="purposeOfLoan"
            value={form.purposeOfLoan}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default PersonalLoanApplication;
