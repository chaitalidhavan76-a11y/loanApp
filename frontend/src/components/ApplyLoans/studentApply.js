import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// const API_URL = "http://localhost:5000/api/user";

const StudentLoanApplication = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    courseName: "",
    institute: "",
    loanAmount: "",
    guardianAnnualIncome: "",
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
      const res = await fetch(`http://localhost:5000/api/user/student-loan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...form,
          loanAmount: Number(form.loanAmount),
          guardianAnnualIncome: Number(form.guardianAnnualIncome),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Submission failed");
      }

      setSuccess(true);
      alert("Student loan application submitted successfully");
      console.log(data)

      setForm({
        fullName: "",
        email: "",
        phone: "",
        courseName: "",
        institute: "",
        loanAmount: "",
        guardianAnnualIncome: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loan-application-container">
      <h1 className="loan-title">Student Loan Application</h1>
      <p className="loan-subtitle">
        Provide your details to apply for an education loan
      </p>

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
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>course Name</label>
          <input
            name="courseName"
            value={form.courseName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>institute / University</label>
          <input
            name="institute"
            value={form.institute}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Loan Amount Required (₹)</label>
          <input
            type="number"
            name="loanAmount"
            value={form.loanAmount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Guardian Annual Income (₹)</label>
          <input
            type="number"
            name="guardianAnnualIncome"
            value={form.guardianAnnualIncome}
            onChange={handleChange}
            required
          />
        </div>

        <button className="submit-btn" disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default StudentLoanApplication;
