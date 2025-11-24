import React, { useState } from "react";

const PersonalLoanApplication = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    employmentType: "",
    monthlyIncome: "",
    loanAmount: "",
    purpose: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Personal loan application submitted!");
  };

  return (
    <div className="loan-application-container">
      <h1 className="loan-title">Personal Loan Application</h1>
      <p className="loan-subtitle">Fill in your information to proceed</p>

      <form className="loan-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Full Name</label>
          <input
            name="fullName"
            placeholder="Enter your full name"
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
            placeholder="example@mail.com"
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
            placeholder="Enter mobile number"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Employment Type</label>
          <select
            name="employmentType"
            value={form.employmentType}
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
            placeholder="0"
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
            placeholder="0"
            value={form.loanAmount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Purpose of Loan</label>
          <input
            name="purpose"
            placeholder="E.g. medical, travel, education"
            value={form.purpose}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default PersonalLoanApplication;
